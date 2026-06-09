'use client';
import s from './ZipPricelists.module.scss';
import cn from 'classnames';
import { downloadZip } from 'client-zip';
import React, { useState } from 'react';

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

	async function createZip(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			const files = await Promise.all(
				paths.map(async ({ path, filename }) => ({
					input: await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${path}`),
					name: filename,
				})),
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
		<>
			<a className={cn(s.button, loading && s.loading)} onClick={createZip}>
				ZIP
			</a>
			{error && <p className={s.error}>{error}</p>}
		</>
	);
}
