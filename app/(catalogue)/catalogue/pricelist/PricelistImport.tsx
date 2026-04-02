'use client';

import s from './PricelistImport.module.scss';
import { ProductUpdatesResponse } from '@/app/(catalogue)/lib/controllers/pricelist';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PricelistUpdateList from '@/app/(catalogue)/catalogue/pricelist/PricelistUpdateList';

export default function PricelistImport({
	parse,
}: {
	parse: (buffer: ArrayBuffer) => Promise<ProductUpdatesResponse>;
}) {
	const [file, setFile] = useState<File | null>(null);
	const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [parsing, setParsing] = useState(false);
	const [updates, setUpdates] = useState<ProductUpdatesResponse | null>(null);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		acceptedFiles.forEach((file) => {
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
		});
	}, []);

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

	if (updates) return <PricelistUpdateList data={updates} />;

	return (
		<div className={s.container}>
			{parsing ? <p>Parsing...</p> : <Dropzone onDrop={onDrop} file={file} />}
			{error && <pre>{error}</pre>}
		</div>
	);
}

function Dropzone({ onDrop, file }: { onDrop: (files: File[]) => void; file: File | null }) {
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
		},
	});

	return (
		<div {...getRootProps()} className={s.dropzone}>
			<div className={s.wrap}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop .xlsx</p>
			</div>
		</div>
	);
}
