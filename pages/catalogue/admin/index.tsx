import styles from './Admin.module.scss'
import React from 'react';
import io from 'socket.io-client'
import type { Socket } from 'socket.io-client';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/hoc";
import { GetAllProductsLightDocument } from "/graphql"
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef} from 'react'
import { AiOutlineLoading, AiOutlineFilePdf } from 'react-icons/ai'

const locales: Locale[] = ['en', 'sv', 'no']

export type AdminProps = { products : ProductRecord[], messages: IntlMessage[] }

export default function Admin({ products, messages} : AdminProps) {
	
	const t = useTranslations('Home')
	const ref = useRef<Socket | null>(null);
	const [socketRef, setSocketRef] = useState<Socket | null>(null);
	const [connected, setConnected] = useState(false)
	const [importId, setImportId] = useState()
	const [importStatus, setImportStatus] = useState<any>()
	const [selectedFile, setSelectedFile] = useState<File>();
	
	//useEffect(()=>{ setConnected( typeof ref.current !== 'undefined')}, [ref])
	useEffect(() => {
		
		const initConnection = () => {
			const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://orsjo-pdf-generator.purplepurples.net'
			ref.current = io(endpoint, {
				transports: ['polling', 'websocket'],
				reconnection: true,
				reconnectionDelay: 1000,
				reconnectionDelayMax : 5000,
				reconnectionAttempts: 99999
			});
			ref.current.on("connect", () => {
				setSocketRef(ref.current)
				setConnected(true)
			})
			ref.current.on("disconnect", () => {
				setConnected(false)
			})
			ref.current.on('status', data => {
				const { id, error } = data;
				if(id !== importId) return 
				setImportStatus(data)
			})
		}
	
		if(!ref.current)
			initConnection()

    return () =>  { 
			ref.current?.disconnect()
			ref.current?.removeAllListeners()
		};
  }, [importId])

	const fileChangeHandler = (e: any) => {
		if(!e.target?.files?.[0]) return
		let file: File = e.target?.files?.[0]; 
		setSelectedFile(file)
	};

	const convertBase64 = (file : File) => {
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

	const handleImportPricelist = async (e : React.MouseEvent) => {
		if(!selectedFile) return
		const excelFileBase64 = await convertBase64(selectedFile);
		ref?.current?.send('pricelist', { excelFileBase64 }, ({id} : any)=>setImportId(id))
	};
	
	return (
		<div className={styles.container}>
			<h1>{t('importPricelist')}</h1>
			<p>
				<input onChange={fileChangeHandler} type="file" name="pricelist" id="pricelist" accept=".xlsx, application/vnd.ms-excel"/>
				<br/>
				<button onClick={handleImportPricelist} disabled={!(selectedFile)}>Start import</button>
				{importStatus?.total &&
					<>
						<br/>
						<progress value={importStatus.item} max={importStatus.total}/>
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
					<div>Errors: {importStatus.errors.map(({product, error} : any, idx: number) => <div key={idx}>{product.id} - {error.message}</div>)}</div>
					<div>Not Found: {importStatus.notFound.map((p: any, idx: number) => <div key={idx}>{p.articleNo} {p.description}</div>)}</div>
				</p>
			)}
			<h1>{t('pricelist')}</h1>
			<ul>
				<li>
					Prislista
					<div className={styles.buttonRow}>
						{locales.map((locale, idx) =>
							<Button key={idx} locale={locale} type="catalogue" path={"catalogue"} socket={socketRef}/>
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
							<Button key={idx} locale={locale} type="catalogue" path={"catalogue/light"} socket={socketRef}/>
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
							<Button key={idx} locale={locale} type="catalogue" path="catalogue/with-lightsource" label={locale} socket={socketRef}/>
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
								<Button key={idx} type="product" locale={locale} path={`catalogue/${p.id}`} productId={p.id} socket={socketRef}/>
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

export type ButtonProps = {locale: Locale, type:string , path:string, productId?:string, label?:string, socket: Socket | null}

const Button = (({locale, type, path, productId, label, socket}: ButtonProps) => {
	
	const [requestId, setRequestId] = useState()
	const [status, setStatus] = useState<any>({})
	const [error, setError] = useState()

	useEffect(()=>{
		if(!socket) return
		
		socket.on('status', data => {
			const { id, error } = data;
			if(id !== requestId) return 
			error ? setError(error) : setStatus(data)
		})
		socket.on('error', (err)=> setError(err))

	}, [socket, requestId])
	
	const handleClick = async () =>{
		console.log('click', productId, type, locale, path)
		socket?.send(type, {locale, path, productId}, ({id}: any)=>setRequestId(id))
	}

	const handleReset = (e : React.MouseEvent) =>{
		e.stopPropagation()
		setRequestId(undefined)
		setError(undefined)
		setStatus({})
	}

	const isGenerating = (requestId && status?.type !== 'END')
	const isEnded = status?.type === 'END'
	const isError = error ? true : false
	
	return (
		<div className={styles.button} onClick={handleClick}  title={error ? `Error: ${error}` : undefined}>
			{ isError ? 
				<div className={styles.error}>Error!</div>
			: isGenerating ? 
				<div className={styles.loader}><AiOutlineLoading/></div>
			: isEnded ? 
				<div className={styles.links}>
					{status.uploads.map((u:any, idx:number) => 
						<a key={idx} href= {u.url} target="_new" onClick={(e) => e.stopPropagation()}>
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

export const getServerSideProps = withGlobalProps({}, async ({ props, context: { locale } } : any) => {

	const { products } = await apiQuery(GetAllProductsLightDocument, { variables:{ locale }})
	
	return {
		props: {
			...props,
			messages: await intlQuery('Home', locale, ['sv', 'en']),
			products
		}
	};
});