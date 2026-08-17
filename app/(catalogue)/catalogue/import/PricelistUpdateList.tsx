'use client';

import s from './PricelistUpdateList.module.scss';
import { ProductUpdatesResponse } from '@/app/(catalogue)/lib/controllers/pricelist';

type PricelistUpdateListProps = {
	data: ProductUpdatesResponse;
};

export default function PricelistUpdateList({ data }: PricelistUpdateListProps) {
	const { notFound, updates, errors } = data;
	console.log(notFound);
	return (
		<div className={s.container}>
			{notFound?.length > 0 && (
				<>
					<h3>Not found</h3>
					<ul className={s.notfound}>
						{notFound.map((article, idx) => (
							<li key={idx}>
								<span>{article.name}</span>
								<span>{article.articleNo}</span>
								<span>{article.price}:-</span>
								<span>{article.description}</span>
							</li>
						))}
					</ul>
				</>
			)}
			{Object.keys(updates).length > 0 && (
				<>
					<h3>Updates</h3>
					<ul className={s.updates}>
						{Object.keys(updates).map((productId, idx) => (
							<li key={idx}>
								{updates[productId].variants.length > 0 && (
									<ul>
										{updates[productId].variants.map((variant, idx) => (
											<li key={idx}>
												<span>{updates[productId].product.title}</span>
												<span>{variant.article_no}</span>
												<span>{variant.price}:-</span>
											</li>
										))}
									</ul>
								)}
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
		</div>
	);
}
