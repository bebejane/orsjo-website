'use client';

import s from './ZipPricelists.module.scss';
import { downloadZip } from 'client-zip';
import { Button, FieldError, Spinner } from 'datocms-react-ui';
import { useState } from 'react';
import { MdFileDownload } from 'react-icons/md';

type ZipPricelistsProps = {
	title: string;
	paths: {
		path: string;
		filename: string;
	}[];
};

export function ZipPricelists({ title, paths }: ZipPricelistsProps) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function createZip() {
		setLoading(true);
		setError(null);
		try {
			const files = await Promise.all(
				paths.map(async ({ path }) => {
					const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${path}`);
					const { url, filename } = await res.json();
					return {
						input: await fetch(url),
						name: filename,
					};
				}),
			);

			const blob = await downloadZip(files).blob();
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = `${title}.zip`;
			link.click();
			link.remove();
		} catch (e) {
			console.log(e);
			setError(typeof e === 'string' ? e : (e as Error).message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className={s.row}>
			<Button
				buttonType='muted'
				buttonSize='xs'
				disabled={loading}
				onClick={createZip}
				fullWidth={true}
				leftIcon={!loading ? <MdFileDownload /> : <Spinner size={16} />}
			>
				Zip
			</Button>
			{error && <FieldError>{error}</FieldError>}
		</div>
	);
}
