'use client';

import s from './PricelistUpdateList.module.scss';
import { useState } from 'react';
import { ProductUpdate, ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';
import { Button, FieldError, Spinner } from 'datocms-react-ui';

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

	if (success) return <div>Pricelist updated!</div>;

	return (
		<div className={s.container}>
			{noArticles > 0 &&
				(updating ? (
					<div className={s.status}>
						<Spinner size={16} />
						<span>Updating {noArticles} articles (this may take a few minutes)</span>
					</div>
				) : (
					<Button buttonType='primary' onClick={handleUpdate}>
						Update {noArticles} articles
					</Button>
				))}
			{notFound?.length > 0 && !updating && (
				<div>
					<h3>{notFound?.length} articles not found</h3>
					<ul className={s.list}>
						{notFound.map((article, idx) => (
							<li key={idx}>
								{article.articleNo} — {article.name} — {article.description} — {article.price}:-
							</li>
						))}
					</ul>
				</div>
			)}
			{errors.length > 0 && (
				<div>
					<h2>Errors</h2>
					<ul className={s.list}>
						{errors.map(({ product, error }, idx) => (
							<li key={idx}>
								<strong>{product.title}</strong> <FieldError>{error}</FieldError>
							</li>
						))}
					</ul>
				</div>
			)}
			{error && <FieldError>{error}</FieldError>}
		</div>
	);
}
