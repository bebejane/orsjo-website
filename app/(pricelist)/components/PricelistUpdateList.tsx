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

	async function handleUpdate() {
		setUpdating(true);
		setError(null);
		try {
			const result = await update(updates);
			setUpdating(false);
			console.log(result);
		} catch (err) {
			setError(typeof err === 'string' ? err : err instanceof Error ? err.message : null);
		} finally {
			setUpdating(false);
		}
	}

	return (
		<div className={s.container}>
			{notFound?.length > 0 && (
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
			{noArticles > 0 && (
				//!notFound?.length && noArticles > 0 && (
				<>
					<h3>Found {noArticles} articles</h3>
					<button onClick={handleUpdate} disabled={updating}>
						{updating ? <DotLoader message={'Update pricelist'} /> : 'Update pricelist'}
					</button>
					{/* <ul className={s.updates}>
						{Object.keys(updates).map((productId, idx) => (
							<li key={idx}>
								{updates[productId].variants.length > 0 && (
									<ul>
										{updates[productId].variants.map((variant, idx) => (
											<li key={idx}>
												<span>{variant.article_no}</span>
												<span>{updates[productId].product.title}</span>
												<span>{variant.price}:-</span>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul> */}
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
		</div>
	);
}
