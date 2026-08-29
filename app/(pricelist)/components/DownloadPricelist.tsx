'use client';

import DotLoader from '@/pricelist/components/DotLoader';
import { Pricelist } from '@/pricelist/lib/pricelists';
import { useState } from 'react';

type DownloadPricelistProps = {
	href: string;
	label: string;
	extension: string;
};
export default function DownloadPricelist({ href, label, extension }: DownloadPricelistProps) {
	const [isLoading, setIsLoading] = useState(false);
	async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		e.stopPropagation();
		setIsLoading(true);
		try {
			const href = e.currentTarget.getAttribute('href')!;
			let response = await fetch(href);
			if (!response.ok) throw new Error('Invalid request');
			const { url, filename } = await response.json();
			console.log(url);
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
		}
		setIsLoading(false);
	}
	return (
		<a href={href} onClick={handleClick}>
			<span>{label}</span>
			{isLoading ? (
				<div>
					<DotLoader />
				</div>
			) : (
				<>{extension}</>
			)}
		</a>
	);
}
