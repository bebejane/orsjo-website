'use client';

import s from './ProductGrid.module.scss';
import cn from 'classnames';
import Page from './Page';
import { chunkArray } from 'next-dato-utils/utils';
import { useDictionary } from '@/catalogue/lib/context/catalogue';

const rows = 5;
const cols = 5;

type ProductGridProps = { products: AllProductsQuery['allProducts'] };

export default function ProductGrid({ products }: ProductGridProps) {
	const t = useDictionary('Catalogue');

	return (
		<>
			<Page>
				<div className={cn(s.gridPageOne, s.productGrid)}>
					<a id='home'></a>
					<header>
						<h1>{t('products')}</h1>
						<p>{t('tip')}</p>
					</header>
					{products.slice(0, (rows - 1) * cols).map(({ image, title, slug }, idx) => (
						<a key={idx} className={s.product} href={`#${slug}`}>
							<p>{title}</p>
							{image && <img src={`${image?.url}?w=600&fm=jpg`} />}
						</a>
					))}
				</div>
			</Page>
			{chunkArray(products.slice((rows - 1) * cols), rows * cols).map((products, idx) => (
				<Page key={idx}>
					<div className={cn(s.productGrid, s.fullGrid)}>
						{products.map(({ image, title, slug }, idx) => (
							<a key={idx} className={s.product} href={`#${slug}`}>
								<p>{title}</p>
								{image && <img src={`${image?.url}?w=300&fm=jpg`} />}
							</a>
						))}
					</div>
				</Page>
			))}
		</>
	);
}
