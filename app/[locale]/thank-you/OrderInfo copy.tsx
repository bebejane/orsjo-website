'use client';

import { useEffect, useState } from 'react';
import geinsQuery from '@/geins/geins-query';
import { OrderPublicDocument } from '@/geins/graphql';
import { Loader } from '@/components';
import { useSearchParams } from 'next/navigation';

export default function OrderInfo() {
	const [order, setOrder] = useState<OrderType | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const params = useSearchParams();

	async function getOrder(publicOrderId: string) {
		try {
			setLoading(true);
			setError(null);
			const { getOrderPublic } = await geinsQuery(OrderPublicDocument, {
				variables: { publicOrderId },
			});
			if (!getOrderPublic) throw new Error('Cannot find order with id: ' + publicOrderId);
			setOrder((getOrderPublic as OrderType) ?? null);
		} catch (e) {
			setError(typeof e === 'string' ? e : (e as Error).message);
		} finally {
			setLoading(false);
		}
	}

	async function completeCart(cartId: string) {}

	useEffect(() => {
		getOrder(params.get('geins-uid') as string);
	}, []);

	useEffect(() => {
		getOrder(params.get('geins-cart') as string);
	}, []);

	if (error)
		return (
			<p>
				Error
				<br />
				{error}
			</p>
		);
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
