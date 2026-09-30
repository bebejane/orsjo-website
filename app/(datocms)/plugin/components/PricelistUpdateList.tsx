'use client';

import s from './PricelistUpdateList.module.scss';
import { useEffect, useState } from 'react';
import type {
	ProductUpdate,
	ProductUpdatesResponse,
	UpdateProgress,
} from '@/pricelist/lib/controllers/pricelist';
import { Button, FieldError, Spinner } from 'datocms-react-ui';
import { RenderPageCtx } from 'datocms-plugin-sdk';

type PricelistUpdateListProps = {
	data: ProductUpdatesResponse;
	update: (updates: ProductUpdate, onProgress?: (progress: UpdateProgress) => void) => Promise<any>;
	ctx: RenderPageCtx;
	environment: { label: string; value: string };
	onUpdating: (updating: boolean) => void;
};

export default function PricelistUpdateList({
	data,
	update,
	ctx,
	environment,
	onUpdating,
}: PricelistUpdateListProps) {
	const { notFound, updates, errors } = data;
	const noArticles = Object.keys(updates).reduce((acc, productId) => {
		const product = updates[productId];
		acc += product.variants.length + product.lightsources.length + product.accessories.length;
		return acc;
	}, 0);

	const [updating, setUpdating] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [progress, setProgress] = useState<UpdateProgress | null>(null);

	async function handleUpdate() {
		const res = await ctx.openConfirm({
			title: 'Update articles',
			content: `Are you sure you want to update ${noArticles} articles on environment: ${environment.label}?`,
			cancel: {
				label: 'Cancel',
				intent: 'negative',
				value: 'cancel',
			},
			choices: [
				{
					label: 'Update',
					value: 'confirm',
					intent: 'positive',
				},
			],
		});

		if (res !== 'confirm') return null;

		setUpdating(true);
		setProgress(null);
		setError(null);
		setSuccess(false);
		try {
			const result = await update(updates, setProgress);
			if (result) {
				setSuccess(true);
			}
		} catch (err) {
			setError(typeof err === 'string' ? err : err instanceof Error ? err.message : null);
		} finally {
			setProgress(null);
			setUpdating(false);
		}
	}

	useEffect(() => {
		onUpdating(updating);
	}, [updating]);

	const pct = progress ? Math.round((progress.current / progress.total) * 100) : 0;

	return (
		<div className={s.container}>
			{noArticles > 0 && (
				<>
					<div className={s.update}>
						<Button buttonType='primary' buttonSize='xs' onClick={handleUpdate} disabled={updating}>
							Update {noArticles} articles
						</Button>
					</div>
					{updating && (
						<div className={s.status}>
							<div className={s.progressLabel}>
								Updating {noArticles} articles (this may take a few minutes)
							</div>
							{progress ? (
								<div className={s.progress}>
									<div className={s.progressTrack}>
										<div className={s.progressFill} style={{ width: `${pct}%` }} />
									</div>
									<span className={s.progressLabel}>
										<span>{pct}%</span>
										<span>
											{progress.current} / {progress.total}
										</span>
									</span>
								</div>
							) : (
								<Spinner size={20} />
							)}
						</div>
					)}
				</>
			)}
			{success && (
				<div className={s.status}>
					<span className={s.success}>Done!. Updated {noArticles} articles</span>
				</div>
			)}
			{errors.length > 0 && (
				<div>
					<h2>Errors</h2>
					<table className={s.list}>
						<tbody>
							<tr>
								<th>Product</th>
								<th>Error</th>
							</tr>
							{errors.map(({ product, error }, idx) => (
								<tr key={idx}>
									<td>
										<strong>{product.title}</strong>
									</td>
									<td>
										<FieldError>{error}</FieldError>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
			{error && <div className={s.error}>{error}</div>}
			{notFound?.length > 0 && !updating && !success && (
				<div>
					<h3>{notFound?.length} articles not found!</h3>
					<table className={s.list}>
						<tbody>
							<tr>
								<th>Article No</th>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
							</tr>
							{notFound.map((article, idx) => (
								<tr key={idx}>
									<td>{article.articleNo}</td>
									<td>{article.name}</td>
									<td>{article.description}</td>
									<td>{article.price}:-</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
