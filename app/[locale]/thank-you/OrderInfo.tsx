'use client';

import { useEffect, useState } from 'react';
import geinsQuery from '@/geins/geins-query';
import { OrderPublicDocument } from '@/geins/graphql';
import { Loader } from '@/components';

export default function OrderInfo() {
	const [order, setOrder] = useState<OrderType | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			setError(null);
			setLoading(true);
			const p = new URL(window.location.href).searchParams;
			const params = p.keys().reduce((acc, key) => {
				acc[key] = p.get(key);
				return acc;
			}, {} as any);
			const publicOrderId = params['geins-uid'];

			if (!publicOrderId) throw new Error('Cannot find public order id');
			console.log(publicOrderId);
			geinsQuery(OrderPublicDocument, {
				variables: { publicOrderId, marketId: '1', channelId: 'mystore1.orsjo' },
			})
				.then((res) => {
					console.log(res);
					setOrder(res.getOrderPublic as OrderType);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (e) {
			setError(typeof e === 'string' ? e : (e as Error).message);
		} finally {
			setLoading(false);
		}
	}, []);

	if (error) return <p>Error: {error}</p>;
	if (loading)
		return (
			<center>
				<Loader />
			</center>
		);
	if (!order) return <p>No order data found</p>;

	return (
		<p>
			<h3>Order details</h3>
			<p>Order id: {order.id}</p>
			<p>Status: {order.status}</p>
			<p>Total: {order.orderTotal?.regularPriceIncVat}</p>
		</p>
	);
}
