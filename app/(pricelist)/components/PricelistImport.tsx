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
	parse: (buffer: ArrayBuffer) => Promise<ProductUpdatesResponse>;
	update: (updates: ProductUpdate) => Promise<any>;
	current: { buffer: ArrayBuffer; filename: string } | null;
}) {
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

		const reader = new FileReader();
		reader.onabort = () => {
			setError('File reading was aborted');
			setLoading(false);
		};
		reader.onerror = (e) => {
			setError('File reading has failed');
			setLoading(false);
		};
		reader.onload = () => {
			const binaryStr = reader.result;
			setLoading(false);
			setBuffer(binaryStr as ArrayBuffer);
		};
		reader.readAsArrayBuffer(file);
	}

	async function updateFile(buffer: ArrayBuffer) {
		try {
			setParsing(true);
			setUpdates(null);
			const updates = await parse(buffer);
			setUpdates(updates);
		} catch (err) {
			setError(err instanceof Error ? err.message : (err as string));
		} finally {
			setParsing(false);
		}
	}

	useEffect(() => {
		if (!buffer) return;
		updateFile(buffer);
	}, [buffer]);

	return (
		<>
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
