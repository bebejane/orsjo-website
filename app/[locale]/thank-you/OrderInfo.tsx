import geinsQuery from '@/geins/geins-query';
import { OrderPublicDocument } from '@/geins/graphql';

export default async function OrderInfo({ publicOrderId }: { publicOrderId: string }) {
	try {
		const { getOrderPublic: order } = await geinsQuery(OrderPublicDocument, {
			variables: { publicOrderId },
		});

		if (!order) return <p>No order data found for: {publicOrderId}</p>;

		return (
			<p>
				<h3>Order details</h3>
				<p>Order id: {order.id}</p>
				<p>Status: {order.status}</p>
				<p>Total: {order.orderTotal?.sellingPriceIncVat}</p>
			</p>
		);
	} catch (e) {
		return <p>Error</p>;
	}
}
