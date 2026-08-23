'use client';

import s from './PricelistImport.module.scss';
import cn from 'classnames';
import { ProductUpdate, ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';
import { useEffect, useState } from 'react';
import PricelistUpdateList from './PricelistUpdateList';
import DotLoader from '@/app/(pricelist)/components/DotLoader';
import { useRouter } from 'next/navigation';
import { sleep } from 'next-dato-utils/utils';

export default function PricelistImport({
	upload,
	parse,
	update,
	current,
}: {
	upload: (buffer: ArrayBuffer, filename: string) => Promise<void>;
	parse: (buffer: ArrayBuffer, filename: string) => Promise<ProductUpdatesResponse>;
	update: (updates: ProductUpdate) => Promise<any>;
	current: { buffer: ArrayBuffer; filename: string } | null;
}) {
	const [uploadNew, setUploadNew] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [parsing, setParsing] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [updates, setUpdates] = useState<ProductUpdatesResponse | null>(null);
	const router = useRouter();

	async function uploadFile(buffer: ArrayBuffer, filename: string) {
		try {
			setUploading(true);
			setUpdates(null);
			await upload(buffer, filename);

			router.refresh();
		} catch (err) {
			setError(err instanceof Error ? err.message : (err as string));
		} finally {
			setUploading(false);
		}
	}

	async function parseFile() {
		try {
			if (!current) return;
			setParsing(true);
			setUpdates(null);
			setError(null);
			const updates = await parse(current.buffer, current.filename);
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
			uploadFile(buffer as ArrayBuffer, file.name);
		};
		reader.readAsArrayBuffer(file);
	}

	return (
		<>
			<div className={s.file}>
				<div className={s.new}>
					<strong>Upload new pricelist (.xlsx)</strong>
					<p className={cn(s.note, 'small')}>
						Note! You need to upload an Excel file (.xlsx) where column A is article no and D price
						in SEK.
					</p>

					<input className={s.file} type='file' onChange={handleChange} accept='.xlsx' />
				</div>
				{current?.filename && !uploading && (
					<div className={s.current}>
						<strong>Current file</strong>
						<br />
						{current.filename}
						<div className={s.apply}>
							<button onClick={parseFile} disabled={parsing}>
								Apply to draft
							</button>
							<button disabled={parsing}>Apply to primary</button>
						</div>
					</div>
				)}
				{uploading && <DotLoader message={'Uploading file'} />}
			</div>
			<div className={s.generate}>
				{parsing && <DotLoader message={'Parsing pricelist'} />}
				{updates && <PricelistUpdateList data={updates} update={update} />}
			</div>
			{error && <div className={s.error}>{error}</div>}
		</>
	);
}
