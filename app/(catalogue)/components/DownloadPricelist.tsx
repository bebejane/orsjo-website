'use client';

import DotLoader from '@/app/(catalogue)/components/DotLoader';
import { Pricelist } from '@/app/(catalogue)/lib/pricelists';
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

			const response = await fetch(href);
			const disposition = response.headers.get('content-disposition');
			var filename = 'pricelist.pdf';
			if (disposition) {
				const filenameStar = /filename\*\s*=\s*UTF-8''([^\s;]+)/i.exec(disposition);
				if (filenameStar?.[1]) {
					filename = decodeURIComponent(filenameStar[1]);
				} else {
					const filenameMatch = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
					if (filenameMatch?.[1]) {
						filename = filenameMatch[1].replace(/['"]/g, '');
					}
				}
			}

			const blob = await response.blob();
			var url = window.URL.createObjectURL(blob);
			var a = document.createElement('a');
			a.href = url;
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
