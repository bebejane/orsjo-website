'use client';

import { useEffect, useState } from 'react';
import geinsQuery from '@/geins/geins-query';
import { CheckoutDocument } from '@/geins/graphql';
import useCart from '@/geins/hooks/useCart';

export default function CheckoutHtml() {
	const [html, setHtml] = useState<string | null>(null);
	const { cart } = useCart();
	const orderId = '1';

	useEffect(() => {
		geinsQuery(CheckoutDocument, {
			variables: { id: orderId, cartId: cart?.id, paymentType: 'STANDARD' },
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
