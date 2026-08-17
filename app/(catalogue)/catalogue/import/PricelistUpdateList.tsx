'use client';

import s from './PricelistUpdateList.module.scss';
import { ProductUpdatesResponse } from '@/app/(catalogue)/lib/controllers/pricelist';

type PricelistUpdateListProps = {
	data: ProductUpdatesResponse;
};

export default function PricelistUpdateList({ data }: PricelistUpdateListProps) {
	const { notFound, updates, errors } = data;
	console.log(updates);
	return (
		<div className={s.container}>
			{notFound?.length > 0 && (
				<>
					<h3>Not found</h3>
					<ul className={s.notfound}>
						{notFound.map((article, idx) => (
							<li key={idx}>
								<span>{article.articleNo}</span>
								<span>{article.name}</span>
								<span>{article.price}</span>
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
								{/* <h3>{updates[productId].product.title}</h3> */}
								{updates[productId].variants.length > 0 && (
									<ul>
										{updates[productId].variants.map((variant, idx) => (
											<li key={idx}>
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
