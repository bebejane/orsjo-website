'use client';

import s from './DownloadPricelist.module.scss';
import { Button, Spinner } from 'datocms-react-ui';
import { useState } from 'react';
import { MdFileDownload } from 'react-icons/md';

type DownloadPricelistProps = {
	href: string;
	label: string;
	extension: string;
};

export default function DownloadPricelist({ href, label, extension }: DownloadPricelistProps) {
	const [isLoading, setIsLoading] = useState(false);

	async function handleClick() {
		setIsLoading(true);
		try {
			let response = await fetch(href);
			if (!response.ok) throw new Error('Invalid request');
			const { url, filename } = await response.json();
			response = await fetch(url);
			if (!response.ok) throw new Error('Invalid request');

			const blob = await response.blob();
			var blobUrl = window.URL.createObjectURL(blob);
			var a = document.createElement('a');
			a.href = blobUrl;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			a.remove();
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className={s.row}>
			<Button
				buttonType='muted'
				buttonSize='xs'
				disabled={isLoading}
				onClick={handleClick}
				fullWidth={true}
				leftIcon={!isLoading ? <MdFileDownload /> : <Spinner size={16} />}
			>
				{label} · {extension.toUpperCase()}
			</Button>
		</div>
	);
}
