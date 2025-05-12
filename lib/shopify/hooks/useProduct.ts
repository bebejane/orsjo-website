'use client'

import shopifyQuery from '@shopify/shopify-query';
import useCountry from './useCountry';
import { useEffect, useState } from 'react';
import { ShopifyProductDocument } from '@shopify/graphql';

export type Props = {
  handle: string | undefined | null
  initialData?: ShopifyProductQuery['product'] | null
}

export default function useProduct({ handle, initialData = null }: Props) {

  const country = useCountry();
  const [product, setProduct] = useState<ShopifyProductQuery['product'] | null>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    if (!handle) {
      setProduct(null);
      setError(new Error('No handle provided'));
      setLoading(false)
      return
    }

    setError(null);
    setLoading(true);

    shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
      variables: { handle },
      tags: [handle],
      revalidate: 1000,
      country
    }).then(({ product }) => {
      setProduct(product);
      setLoading(false);
    }).catch((e) => {
      console.error(e);
      setError(e);
    }).finally(() => {
      setLoading(false);
    });
  }, [country]);

  return { product, loading, error }
}