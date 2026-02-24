'use client';

import { useEffect, useState } from 'react';
import geinsQuery from '@/geins/geins-query';
import { CheckoutDocument } from '@/geins/graphql';
import useCart from '@/geins/hooks/useCart';

export default function CheckoutHtml({ orderId }: { orderId: string | null }) {
	const [html, setHtml] = useState<string | null>(null);
	const { cart } = useCart();

	useEffect(() => {
		if (!orderId) return;
		geinsQuery(CheckoutDocument, {
			variables: { orderId, cartId: cart?.id },
		})
			.then((res) => {
				setHtml(res.checkout?.htmlSnippet ?? null);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return html && <div dangerouslySetInnerHTML={{ __html: html }} />;
}
