import s from './page.module.scss';
import { Link, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import * as geins from '@/geins/merchant-api';
import OrderInfo from '@/app/[locale]/thank-you/OrderInfo';
//import OrderInfo from '@/app/[locale]/thank-you/OrderInfo';

export const dynamic = 'force-dynamic';

export default async function ThankYou({ params, searchParams }: PageProps<'/[locale]/thank-you'>) {
	const query = await searchParams;
	console.log(query);

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
				<OrderInfo />
			</div>
		</div>
	);
}
