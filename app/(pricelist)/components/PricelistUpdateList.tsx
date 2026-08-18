'use client';

import s from './PricelistUpdateList.module.scss';
import { ProductUpdatesResponse } from '@/pricelist/lib/controllers/pricelist';

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
<<<<<<< HEAD
								<span>{article.name}</span>
<<<<<<< HEAD:app/(catalogue)/components/PricelistUpdateList.tsx
<<<<<<< HEAD:app/(catalogue)/components/PricelistUpdateList.tsx
								<span>{article.price}:-</span>
								<span>{article.description}</span>
=======
								<span>{article.price}</span>
>>>>>>> 08570c58 (p):app/(catalogue)/catalogue/import/PricelistUpdateList.tsx
=======
=======
>>>>>>> 21d1e546 (ups)
								<span>{article.articleNo}</span>
								<span>{article.name}</span>
								<span>{article.price}:-</span>
								<span>{article.description}</span>
>>>>>>> 1457a438 (names):app/(catalogue)/catalogue/import/PricelistUpdateList.tsx
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
<<<<<<< HEAD:app/(catalogue)/components/PricelistUpdateList.tsx
<<<<<<< HEAD:app/(catalogue)/components/PricelistUpdateList.tsx
=======
								{/* <h3>{updates[productId].product.title}</h3> */}
>>>>>>> 08570c58 (p):app/(catalogue)/catalogue/import/PricelistUpdateList.tsx
=======
>>>>>>> 1457a438 (names):app/(catalogue)/catalogue/import/PricelistUpdateList.tsx
								{updates[productId].variants.length > 0 && (
									<ul>
										{updates[productId].variants.map((variant, idx) => (
											<li key={idx}>
												<span>{variant.article_no}</span>
<<<<<<< HEAD
<<<<<<< HEAD:app/(catalogue)/components/PricelistUpdateList.tsx
												<span>{updates[productId].product.title}</span>
=======
>>>>>>> 08570c58 (p):app/(catalogue)/catalogue/import/PricelistUpdateList.tsx
=======
												<span>{updates[productId].product.title}</span>
>>>>>>> 21d1e546 (ups)
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
