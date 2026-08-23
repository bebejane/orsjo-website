'use client';

import { useState } from 'react';
import s from './PricelistUpdateList.module.scss';
import { ProductUpdate, ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';
import DotLoader from '@/app/(pricelist)/components/DotLoader';

type PricelistUpdateListProps = {
	data: ProductUpdatesResponse;
	update: (updates: ProductUpdate) => Promise<number>;
};

export default function PricelistUpdateList({ data, update }: PricelistUpdateListProps) {
	const { notFound, updates, errors } = data;
	const noArticles = Object.keys(updates).reduce((acc, productId) => {
		const product = updates[productId];
		acc += product.variants.length + product.lightsources.length + product.accessories.length;
		return acc;
	}, 0);

	const [updating, setUpdating] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	async function handleUpdate() {
		setUpdating(true);
		setError(null);
		setSuccess(false);
		try {
			const result = await update(updates);
			setUpdating(false);
			setSuccess(true);
			console.log(result);
		} catch (err) {
			setError(typeof err === 'string' ? err : err instanceof Error ? err.message : null);
		} finally {
			setUpdating(false);
		}
	}

	if (success) return <div className={s.container}>Pricelist updated!</div>;

	return (
		<div className={s.container}>
			{noArticles > 0 && (
				<>
					{updating ? (
						<DotLoader message={`Updating ${noArticles} articles (this may take a few minutes)`} />
					) : (
						<button onClick={handleUpdate} disabled={updating}>
							Update {noArticles} articles
						</button>
					)}
				</>
			)}
			{notFound?.length > 0 && !updating && (
				<>
					<h3>{notFound?.length} articles not found</h3>
					<ul className={s.notfound}>
						{notFound.map((article, idx) => (
							<li key={idx}>
								<span>{article.articleNo}</span>
								<span>{article.name}</span>
								<span>{article.description}</span>
								<span>{article.price}:-</span>
							</li>
						))}
					</ul>
				</>
			)}
			{errors.length > 0 && (
				<>
					<h2>Errors</h2>
					<ul className={s.errors}>
						{errors.map(({ product, error }, idx) => (
							<li key={idx}>
								<span>{product.title}</span>
								<span className={s.error}>{error}</span>
							</li>
						))}
					</ul>
				</>
			)}
			{error && <div className={s.error}>{error}</div>}
		</div>
	);
}
