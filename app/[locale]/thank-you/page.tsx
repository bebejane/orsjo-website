import s from './page.module.scss';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import * as geins from '@/geins/merchant-api';

export default async function ThankYou({ params }: PageProps<'/[locale]/thank-you'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);
	const orderId = new URL(window.location.href).searchParams.get('order_id');

	return (
		<div className={s.page}>
			<h1>Thank you for your order!</h1>
			<p>Your order has been placed and is being processed.</p>
			<p>
				You will receive an email with your order details shortly. If you have any questions, please
				contact us at{' '}
				<a href={`mailto:${process.env.POSTMARK_FROM_EMAIL}`}>${process.env.POSTMARK_FROM_EMAIL}</a>
				.
			</p>
			<p>{orderId}</p>
		</div>
	);
}
