import styles from './index.module.scss'
import base64 from 'base-64';
import io from 'socket.io-client'
import { apiQuery, intlQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/utils";
import { GetProductsLight, GetPricelist } from "/graphql"
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef} from 'react'
import { AiOutlineLoading, AiOutlineFilePdf } from 'react-icons/ai'

export default function Home({ products, pricelist, messages, endpoint }) {

	const t = useTranslations('Home')
	const socketRef = useRef();
	const [status, setStatus] = useState({})
	const [importStatus, setImportStatus] = useState()
	const [selectedFile, setSelectedFile] = useState();
	
	useEffect(()=>{
		socketRef.current = io(endpoint.url);
		socketRef.current.on('status', data => {
			if(data.type === 'import') return setImportStatus({...data})
			status[data.id] = data;
			setStatus({...status})
		})
		
		socketRef.current.on("connect", ()=> console.log("connected ws"))
    return () => socketRef.current.disconnect();
  }, [])

	const fileChangeHandler = (event) => setSelectedFile(event.target.files[0]);

	const handleImportPricelist = async (e) => {
		const formData = new FormData(); formData.append('file', selectedFile);
		const headers = new Headers(); headers.append('Authorization', `Basic ${base64.encode(endpoint.username + ":" + endpoint.password)}`);
		const res = await fetch(`${endpoint.url}/import`,{method: 'POST', body: formData, headers})
		const { id } = await res.json()
	};
	
	return (
		<div className={styles.container}>
			<h1>{t('pricelist')}</h1>
			<ul>
				<li>
					Prislista
					<div className={styles.buttonRow}>
						<Button locale={'en'} status={status} type="catalogue" label={'EN'} endpoint={endpoint}/>
						<Button locale={'sv'} status={status} type="catalogue" label={'SV'} endpoint={endpoint}/>
						<Button locale={'no'} status={status} type="catalogue" label={'NO'} endpoint={endpoint}/>
					</div>
					<div className={styles.links}>
						<a href={`/en/catalogue`} target="_new">EN</a>
						<a href={`/sv/catalogue`} target="_new">SV</a> 
						<a href={`/no/catalogue`} target="_new">NO</a>
					</div>
				</li>
				<li>
					Enkel
					<div className={styles.buttonRow}>
						<Button locale={'en'} status={status} type="catalogue/light" label={'EN'} endpoint={endpoint}/>
						<Button locale={'sv'} status={status} type="catalogue/light" label={'SV'} endpoint={endpoint}/>
						<Button locale={'no'} status={status} type="catalogue/light" label={'NO'} endpoint={endpoint}/>
					</div>
					<div className={styles.links}>
						<a href={`/en/catalogue/light`} target="_new">EN</a>
						<a href={`/sv/catalogue/light`} target="_new">SV</a> 
						<a href={`/no/catalogue/light`} target="_new">NO</a>
					</div>
				</li>
				<li>
					Ink. ljuskälla:
					<div className={styles.buttonRow}>
						<Button locale={'en'} status={status} type="catalogue/with-lightsource" label={'EN'} endpoint={endpoint}/>
						<Button locale={'sv'} status={status} type="catalogue/with-lightsource" label={'SV'} endpoint={endpoint}/>
						<Button locale={'no'} status={status} type="catalogue/with-lightsource" label={'NO'} endpoint={endpoint}/>
					</div>
					<div className={styles.links}>
						<a href={`/en/catalogue/with-lightsource`} target="_new">EN</a>
						<a href={`/sv/catalogue/with-lightsource`} target="_new">SV</a>
						<a href={`/no/catalogue/with-lightsource`} target="_new">NO</a>
					</div>
				</li>

			</ul>
			<h1>{t('products')} ({products.length})</h1>
			<ul>
				{products.map((p, idx) =>
					<li key={idx}>{p.title} ({p.categories.map(c => c.name).join(', ')})
						<Button id={p.id} locale={'en'} status={status} type="product" endpoint={endpoint}/>
						<div className={styles.htmlLinks}>
							<a href={`/en/catalogue/${p.id}`} target="_new">EN</a>
							<a href={`/sv/catalogue/${p.id}`} target="_new">SV</a>
							<a href={`/no/catalogue/${p.id}`} target="_new">NO</a>
						</div>
					</li>
				)}
			</ul>
			<h1>{t('importPricelist')}</h1>
			<p>
				<input onChange={fileChangeHandler} type="file" name="pricelist" id="pricelist" accept=".xlsx, application/vnd.ms-excel"/>
				<br/>
				<button onClick={handleImportPricelist} disabled={!(selectedFile)}>Start import</button>
				{importStatus && importStatus.data.total &&
					<>
						<br/>
						<progress value={importStatus.data.item} max={importStatus.data.total} min={0}/>
						<br/>
						{importStatus.data.item}/{importStatus.data.total}
					</>
				}
				{importStatus && importStatus.status === 'END' && (
					<span>Finished! Updated: {importStatus.updated} / Not found: {importStatus.notFound}</span>
				)}
				{importStatus && importStatus.status === 'ERROR' && (
					<span>Error: {importStatus.data.error?.toString()}</span>
				)}
			</p>
		</div>

	)
}

const Button = ({id, locale, type, label = 'GENERATE PDF', status, endpoint}) => {
	
	const [requestId, setRequestId] = useState()
	const {username, password, url} = endpoint

	const handleClick = async () =>{
		const headers = new Headers(); headers.append('Authorization', `Basic ${base64.encode(username + ":" + password)}`);
		const res = await fetch(`${url}/${locale}/${type}${id ? `/${id}` : ''}`, {
			method: 'GET',
			headers
		})
		const data = await res.json()
		setRequestId(data.id)
	}
	const handleReset = (e) =>{
		e.stopPropagation()
		setRequestId(undefined)
	}
	const isGenerating = (status[requestId] && status[requestId].status !== 'END')
	const isEnded = (status[requestId] && status[requestId].status === 'END')
	const isError = (status[requestId] && status[requestId].status === 'ERROR')
	
	return (
		<div className={styles.button} onClick={handleClick} disabled={(status[requestId])}>
			{ isGenerating ? 
				<div className={styles.loader}><AiOutlineLoading/></div>
			: isEnded ? 
				<div className={styles.links}>
					{status[requestId].data.uploads.map((u,idx) => 
						<a href={u.url} key={idx} target="_new" onClick={(e) => e.stopPropagation()}>
							<AiOutlineFilePdf/>
							<br/>
							{u.filename?.includes('en') ? 'EN' : u.filename?.includes('sv') ? 'sv' : 'no'}
						</a>
					)}
				</div>
			:
				label
			}
			{(isGenerating || isEnded) && <div className={styles.close} onClick={handleReset}>×</div>} 
		</div>
	)
}

export const getServerSideProps = withGlobalProps(async ({ props, revalidate, context,  context: { locale } }) => {

	const { products, pricelist } = await apiQuery([GetProductsLight, GetPricelist], [{ locale }, { locale }])
	const messages = await intlQuery('Home', locale, ['sv', 'en'])
	
	return {
		props: {
			...props,
			messages,
			products,
			pricelist,
			endpoint: {
				url:process.env.DATOCMS_WEBHOOK_ENDPOINT,
				username:process.env.DATOCMS_WEBHOOK_USERNAME,
				password:process.env.DATOCMS_WEBHOOK_PASSWORD
			}
		}
	};
});