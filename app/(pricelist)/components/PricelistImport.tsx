'use client';

import s from './PricelistImport.module.scss';
import { ProductUpdate, ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';
import { useEffect, useState } from 'react';
import PricelistUpdateList from './PricelistUpdateList';

export default function PricelistImport({
	parse,
	update,
}: {
	parse: (buffer: ArrayBuffer) => Promise<ProductUpdatesResponse>;
	update: (updates: ProductUpdate) => Promise<number>;
}) {
	const [file, setFile] = useState<File | null>(null);
	const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [parsing, setParsing] = useState(false);
	const [updates, setUpdates] = useState<ProductUpdatesResponse | null>(null);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;
		setError(null);
		setLoading(true);
		setFile(file);
		const reader = new FileReader();
		reader.onabort = () => {
			setError('file reading was aborted');
			setLoading(false);
		};
		reader.onerror = (e) => {
			setError('file reading has failed');
			setLoading(false);
		};
		reader.onload = () => {
			const binaryStr = reader.result;
			setLoading(false);
			setBuffer(binaryStr as ArrayBuffer);
		};
		reader.readAsArrayBuffer(file);
	}

	useEffect(() => {
		if (!buffer) return;

		setParsing(true);
		setUpdates(null);
		parse(buffer)
			.then((updates) => {
				setUpdates(updates);
			})
			.catch((err) => {
				setError(err?.message ?? err);
			})
			.finally(() => {
				setParsing(false);
			});
	}, [buffer]);

	//if (updates) return <PricelistUpdateList data={updates} />;

	return (
		<>
			<input className={s.file} type='file' onChange={handleChange} />
			<p className='small'>
				Note! You need to upload an Excel file (.xlsx) where column A is article no and D price in
				SEK.
			</p>
			{error && <pre>{error}</pre>}
			{parsing && <p>Uploading...</p>}
			{updates && <PricelistUpdateList data={updates} update={update} />}
		</>
	);
}
