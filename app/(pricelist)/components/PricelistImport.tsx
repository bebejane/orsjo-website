'use client';

import s from './PricelistImport.module.scss';
import { ProductUpdate, ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';
import { useEffect, useState } from 'react';
import PricelistUpdateList from './PricelistUpdateList';
import DotLoader from '@/app/(pricelist)/components/DotLoader';

export default function PricelistImport({
	parse,
	update,
	current,
}: {
	parse: (buffer: ArrayBuffer, filename: string) => Promise<ProductUpdatesResponse>;
	update: (updates: ProductUpdate) => Promise<any>;
	current: { buffer: ArrayBuffer; filename: string } | null;
}) {
	const [uploadNew, setUploadNew] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [parsing, setParsing] = useState(false);
	const [updates, setUpdates] = useState<ProductUpdatesResponse | null>(null);

	async function updateFile(buffer: ArrayBuffer, filename: string) {
		try {
			setParsing(true);
			setUpdates(null);
			const updates = await parse(buffer, filename);
			setUpdates(updates);
		} catch (err) {
			setError(err instanceof Error ? err.message : (err as string));
		} finally {
			setParsing(false);
		}
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;
		setError(null);

		const reader = new FileReader();
		reader.onabort = () => {
			setError('File reading was aborted');
		};
		reader.onerror = (e) => {
			setError('File reading has failed');
		};
		reader.onload = () => {
			const buffer = reader.result;
			updateFile(buffer as ArrayBuffer, file.name);
		};
		reader.readAsArrayBuffer(file);
	}

	return (
		<>
			{current?.filename && <div className={s.upload}>Current: {current.filename}</div>}
			<input className={s.file} type='file' onChange={handleChange} accept='.xlsx' />
			<p className='small'>
				Note! You need to upload an Excel file (.xlsx) where column A is article no and D price in
				SEK.
			</p>
			{error && <div className={s.error}>{error}</div>}
			{parsing && <DotLoader message={'Reading file and generating environment'} />}
			{updates && <PricelistUpdateList data={updates} update={update} />}
		</>
	);
}
