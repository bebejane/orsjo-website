import styles from './index.module.scss'
import type { Product, IntlMessage } from '/types';
import React from 'react';
import io from 'socket.io-client'
import type { Socket } from 'socket.io-client';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/hoc";
import { GetProductsLight } from "/graphql"
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef} from 'react'
import { AiOutlineLoading, AiOutlineFilePdf } from 'react-icons/ai'

const locales = ['en', 'sv', 'no']

type HomeProps = { products : Product[], messages: [IntlMessage],  }

export default function Home({ products, messages} : HomeProps) {
	
	const t = useTranslations('Home')
	const ref = useRef<Socket | null>(null);
	const [socketRef, setSocketRef] = useState<Socket | null>(null);
	const [connected, setConnected] = useState(false)
	const [importId, setImportId] = useState()
	const [importStatus, setImportStatus] = useState()
	const [selectedFile, setSelectedFile] = useState();
	
	useEffect(()=>{ setConnected( ref !== null)}, [ref])
	useEffect(() => {
		ref.current = io(process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://orsjo-pdf-generator.purplepurples.net', {
      transports: ['polling', 'websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: 99999
    });
		
		ref.current.on("connect", () => setSocketRef(ref))
		ref.current.on('status', data => {
			const { id, error } = data;
			if(id !== importId) return 
			console.log(data)
			setImportStatus(data)
		})

    return () => ref.current?.disconnect();
  }, [])


	const fileChangeHandler = (event) => setSelectedFile(event.target.files[0]);

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleImportPricelist = async (e) => {
		const excelFileBase64 = await convertBase64(selectedFile);
		ref?.current?.send('pricelist', {excelFileBase64}, ({id})=>setImportId(id))
	};
	
	return (
		<div className={styles.container}>
			<h1>{t('importPricelist')}</h1>
			<p>
				<input onChange={fileChangeHandler} type="file" name="pricelist" id="pricelist" accept=".xlsx, application/vnd.ms-excel"/>
				<br/>
				<button onClick={handleImportPricelist} disabled={!(selectedFile)}>Start import</button>
				{importStatus?.data?.total &&
					<>
						<br/>
						<progress value={importStatus.item} max={importStatus.total} min={0}/>
						<br/>
						{importStatus.item}/{importStatus.total}
					</>
				}
			</p>
			{importStatus?.type === 'END' && (
				<p>					
					<span>
						Updated: {importStatus.updated.length} / Not found: {importStatus.notFound.length} / Errors: {importStatus.errors.length}
					</span>
					<br/>
					<div>Errors: {importStatus.errors.map(({product, error}) => <div>{product.id} - {error.message}</div>)}</div>
					<div>Not Found: {importStatus.notFound.map(p => <div>{p.articleNo} {p.description}</div>)}</div>
				</p>
			)}
			<h1>{t('pricelist')}</h1>
			<ul>
				<li>
					Prislista
					<div className={styles.buttonRow}>
						{locales.map((locale, idx) =>
							<Button key={idx} locale={locale} type="catalogue" path={"catalogue"} ref={socketRef}/>
						)}
					</div>
					<div className={styles.links}>
						{locales.map((locale, idx) =>
							<a key={idx} href= {`/${locale}/catalogue`} target="_new">{locale}</a>
						)}
					</div>
				</li>
				<li>
					Enkel
					<div className={styles.buttonRow}>
						{locales.map((locale, idx) =>
							<Button key={idx} locale={locale} type="catalogue" path={"catalogue/light"} ref={socketRef}/>
						)}
					</div>
					<div className={styles.links}>
						{locales.map((locale, idx) =>
							<a key={idx} href= {`/${locale}/catalogue/light`} target="_new">{locale}</a>
						)}
					</div>
				</li>
				<li>
					Ink. ljuskälla:
					<div className={styles.buttonRow}>
						{locales.map((locale, idx) =>
							<Button key={idx} locale={locale} type="catalogue" path="catalogue/with-lightsource" label={locale} ref={socketRef}/>
						)}
					</div>
					<div className={styles.links}>
					{locales.map((locale, idx) =>
						<a key={idx} href= {`/${locale}/catalogue/with-lightsource`} target="_new">{locale}</a>
					)}
					</div>
				</li>

			</ul>
			<h1>{t('products')} ({products.length})</h1>
			<ul>
				{products.map((p, idx) =>
					<li key={idx}>{p.title} ({p.categories.map(c => c.name).join(', ')})
						<div className={styles.buttonRow}>
							{locales.map((locale, idx) =>
								<Button key={idx} type="product" locale={locale} path={`catalogue/${p.id}`} productId={p.id} ref={socketRef}/>
							)}
							
						</div>
						<div className={styles.htmlLinks}>
							{locales.map((locale, idx) =>
								<a key={idx} href= {`/${locale}/catalogue/${p.id}`} target="_new">{locale}</a>
							)}
						</div>
					</li>
				)}
			</ul>
			
			{!connected && <div className={styles.connecting}>Connecting...</div>}
		</div>

	)
}

type Props = { children?: React.ReactNode; type: "button" };
export type Ref = Socket;
type ButtonProps = {props:Props, ref: Ref}

// eslint-disable-next-line react/display-name
const Button = React.forwardRef<Ref, Props>((props, ref) => {
	
	const {locale, type, path, productId, label} = props
	const socket = ref
	const [requestId, setRequestId] = useState()
	const [status, setStatus] = useState({})
	const [error, setError] = useState()

	useEffect(()=>{
		if(!socket) return
		
		socket.current.on('status', data => {
			const { id, error } = data;
			if(id !== requestId) return 
			console.log(data)
			error ? setError(error) : setStatus(data)
		})
		socket.current.on('error', (err)=> setError(err))

	}, [socket, requestId])
	
	const handleClick = async () =>{
		console.log('click', productId, type, locale, path)
		socket.current.send(type, {locale, path, productId}, ({id})=>setRequestId(id))
	}

	const handleReset = (e) =>{
		e.stopPropagation()
		setRequestId(undefined)
		setError(undefined)
		setStatus(undefined)
	}

	const isGenerating = (requestId && status?.type !== 'END')
	const isEnded = status?.type === 'END'
	const isError = error ? true : false
	
	return (
		<div className={styles.button} onClick={handleClick} disabled={(status !== undefined)} title={error ? `Error: ${error}` : undefined}>
			{ isError ? 
				<div className={styles.error}>Error!</div>
			: isGenerating ? 
				<div className={styles.loader}><AiOutlineLoading/></div>
			: isEnded ? 
				<div className={styles.links}>
					{status.uploads.map((u, idx) => 
						<a key={idx} href= {u.url} key={idx} target="_new" onClick={(e) => e.stopPropagation()}>
							<AiOutlineFilePdf/>
							<br/>
							{u.filename?.includes('en') ? 'EN' : u.filename?.includes('sv') ? 'sv' : 'no'}
						</a>
					)}
				</div>
			:
				label || locale
			}
			{(isGenerating || isEnded) && <div className={styles.close} onClick={handleReset}>×</div>} 
		</div>
	)
})

export const getServerSideProps = withGlobalProps({}, async ({ props, revalidate, context: { locale } }) => {

	const { products } = await apiQuery([GetProductsLight], [{variables:{ locale }}])
	
	return {
		props: {
			...props,
			messages: await intlQuery('Home', locale, ['sv', 'en']),
			products
		}
	};
});