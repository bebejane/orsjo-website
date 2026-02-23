'use client';

import geinsQuery from '../geins-query';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { GeinsProductsByCategoryDocument } from '@/geins/graphql';

export type Props = {
	slug: string | undefined | null;
	initialData?: ProductType[] | null;
};

export default function useProduct({ slug, initialData = null }: Props) {
	const country = useLocale();
	const [products, setProducts] = useState<ProductType[] | null>(initialData);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!slug) {
			setProducts(null);
			setError(new Error('No handle provided'));
			setLoading(false);
			return;
		}

		setError(null);
		setLoading(true);

		geinsQuery(GeinsProductsByCategoryDocument, {
			variables: { articleNumbers: [slug], skip: 0, take: 1 },
			tags: [slug],
			revalidate: 1000,
			country,
		})
			.then(({ products }) => {
				setProducts((products?.products as ProductType[]) ?? null);
				setLoading(false);
			})
			.catch((e) => {
				console.error(e);
				setError(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [country]);

	return { products, loading, error };
}
