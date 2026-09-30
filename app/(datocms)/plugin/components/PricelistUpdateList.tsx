'use client';

import s from './PricelistUpdateList.module.scss';
import { useState } from 'react';
import type { ProductUpdate, ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';
import { Button, FieldError, Spinner } from 'datocms-react-ui';
import { RenderPageCtx } from 'datocms-plugin-sdk';

type PricelistUpdateListProps = {
	data: ProductUpdatesResponse;
	update: (updates: ProductUpdate) => Promise<number>;
	ctx: RenderPageCtx;
};

export default function PricelistUpdateList({ data, update, ctx }: PricelistUpdateListProps) {
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
		const res = await ctx.openConfirm({
			title: 'Uppdatera artiklar',
			content: `Är du säker på att du vill uppdatera alla artiklar?`,
			cancel: {
				label: 'Avbryt',
				intent: 'negative',
				value: 'cancel',
			},
			choices: [
				{
					label: 'Uppdatera',
					value: 'confirm',
					intent: 'positive',
				},
			],
		});

		if (res !== 'confirm') return null;

		setUpdating(true);
		setError(null);
		setSuccess(false);
		try {
			const result = await update(updates);
			if (result) {
				setSuccess(true);
			}
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
