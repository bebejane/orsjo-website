import s from './page.module.scss';
import { Link, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import * as geins from '@/geins/merchant-api';
import OrderInfo from '@/app/[locale]/thank-you/OrderInfo';
import geinsQuery from '@/geins/geins-query';
import { CartDocument, CompletCartDocument } from '@/geins/graphql';

export const dynamic = 'force-dynamic';

export default async function ThankYou({ searchParams }: PageProps<'/[locale]/thank-you'>) {
	const params = await searchParams;
	const cartId = params['geins-cart'] as string;
	const publicOrderId = params['geins-uid'] as string;
	const paymentMethodId = params['geins-pm'] as string;
	const paymentMethod = params['geins-pt'] as string;

	if (!cartId || !publicOrderId) return notFound();

	let cart = (await geinsQuery(CartDocument, { variables: { id: cartId } })).getCart;
	console.log(cart);
	console.log(cartId);
	if (!cart) return notFound();

	if (!cart.isCompleted)
		cart = (
			await geinsQuery(CompletCartDocument, {
				variables: { id: cartId },
			})
		).completeCart;

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
