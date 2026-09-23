'use client';

import s from './PricelistImport.module.scss';
import { ProductUpdate, ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';
import { useState } from 'react';
import PricelistUpdateList from './PricelistUpdateList';
import { Button, FieldError, FieldWrapper, Spinner } from 'datocms-react-ui';

export default function PricelistImport({
	upload,
	parse,
	update,
	current,
	refresh,
}: {
	upload: (buffer: ArrayBuffer, filename: string) => Promise<void>;
	parse: (buffer: ArrayBuffer, filename: string) => Promise<ProductUpdatesResponse>;
	update: (updates: ProductUpdate) => Promise<any>;
	current: { buffer: ArrayBuffer; filename: string } | null;
	refresh?: () => void;
}) {
	const [error, setError] = useState<string | null>(null);
	const [parsing, setParsing] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [updates, setUpdates] = useState<ProductUpdatesResponse | null>(null);

	async function uploadFile(buffer: ArrayBuffer, filename: string) {
		try {
			setUploading(true);
			setUpdates(null);
			await upload(buffer, filename);

			refresh?.();
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
			console.log(updates);
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
		reader.onerror = () => {
			setError('File reading has failed');
		};
		reader.onload = () => {
			const buffer = reader.result;
			uploadFile(buffer as ArrayBuffer, file.name);
		};
		reader.readAsArrayBuffer(file);
	}

	return (
		<div className={s.container}>
			<FieldWrapper
				id='pricelist-file-input'
				label='Upload new pricelist (.xlsx)'
				hint='Column A must be the article number and column D the price in SEK.'
			>
				<input id='pricelist-file-input' type='file' accept='.xlsx' onChange={handleChange} />
				{uploading && (
					<div className={s.status}>
						<Spinner size={16} />
						<span>Uploading file</span>
					</div>
				)}
			</FieldWrapper>
			{current?.filename && !uploading && (
				<div className={s.currentFile}>
					<span>Current file: {current.filename}</span>
					<div className={s.buttonRow}>
						<Button buttonSize='xs' buttonType='primary' onClick={parseFile} disabled={parsing}>
							Apply to draft
						</Button>
						<Button buttonSize='xs' disabled>
							Apply to primary
						</Button>
					</div>
					{parsing && (
						<div className={s.status}>
							<Spinner size={16} />
							<span>Parsing pricelist</span>
						</div>
					)}
				</div>
			)}
			{updates && <PricelistUpdateList data={updates} update={update} />}
			{error && <FieldError>{error}</FieldError>}
		</div>
	);
}
