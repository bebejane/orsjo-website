import s from './page.module.scss';
import { Link, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import * as geins from '@/geins/merchant-api';
import OrderInfo from './OrderInfo';
import geinsQuery from '@/geins/geins-query';
import { CartDocument, CompletCartDocument } from '@/geins/graphql';

export const dynamic = 'auto';

export default async function ThankYou({ searchParams }: PageProps<'/[locale]/thank-you'>) {
	const params = await searchParams;
	console.log(params);
	const cartId = params['geins-cart'] as string;
	const publicOrderId = params['geins-uid'] as string;
	const paymentMethodId = params['geins-pm'] as string;
	const paymentMethod = params['geins-pt'] as string;
	let error = null;
	let cart = null;

	try {
		if (!cartId || !publicOrderId) throw 'Cart id or public order id not found';
		else cart = (await geinsQuery(CartDocument, { variables: { id: cartId } })).getCart;

		if (!cart?.isCompleted)
			cart = (
				await geinsQuery(CompletCartDocument, {
					variables: { id: cartId },
				})
			).completeCart;

		if (!cart) throw 'Cart not found with id: ' + cartId;
	} catch (e) {
		error = typeof e === 'string' ? e : (e as Error).message;
	}

	if (error) {
		return (
			<div className={s.page}>
				<div className={s.wrap}>
					<h1>Error</h1>
					<p>{error}</p>
				</div>
			</div>
		);
	}

	return (
		<div className={s.page}>
			<div className={s.wrap}>
				<h1>Thank you for your order!</h1>
				<p>Your order has been placed and is being processed.</p>
				<p>
					You will receive an email with your order details shortly. If you have any questions,
					please contact us at{' '}
					<a href={`mailto:${process.env.POSTMARK_FROM_EMAIL}`}>
						{process.env.POSTMARK_FROM_EMAIL}
					</a>
					.
				</p>
				<OrderInfo publicOrderId={publicOrderId} />
			</div>
		</div>
	);
}
