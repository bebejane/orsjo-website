import s from './page.module.scss';
import geinsQuery from '@/geins/geins-query';
import { CartDocument, CompletCartDocument } from '@/geins/graphql';
import { Section } from '@/components';
import { ArrowLink } from '@/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';

export const dynamic = 'auto';

export default async function ThankYou({ searchParams }: PageProps<'/[locale]/thank-you'>) {
	const params = await searchParams;
	const cartId = params['geins-cart'] as string;
	const checkoutId = params['geins-uid'] as string;
	const paymentType = params['geins-pt'] as PaymentType;
	const paymentTypeId = params['geins-pm'] as string;

	let error: string | null = null;
	let cart: CartType | null = null;
	let checkout: CheckoutDataType | null = null;

	try {
		if (cartId)
			cart = (await geinsQuery(CartDocument, { variables: { id: cartId } })).getCart as CartType;

		//if (!cart) throw `Cart not found with id: ${cartId}`;

		if (cart && !cart.isCompleted)
			cart = (
				await geinsQuery(CompletCartDocument, {
					variables: { id: cartId },
				})
			).completeCart as CartType;

		// console.log({ checkoutId, paymentType, paymentTypeId });

		// checkout = (await geinsQuery(CheckoutDocument, { variables: { id: checkoutId, paymentType } }))
		// 	.checkout as CheckoutDataType;

		// console.log({ checkout });
	} catch (e) {
		error = typeof e === 'string' ? e : (e as Error).message;
	}

	return (
		<Section className={s.page} top={true}>
			<div className={s.wrap}>
				{!error ? (
					<>
						<h1 className='big'>Thank you for your order!</h1>
						<p>Your order has been placed and is being processed.</p>
						<p>
							You will receive an email with your order details shortly. If you have any questions,
							please contact us at <a href={`mailto:order@orsjo.com`}>order@orsjo.com</a>.
						</p>
						<ArrowLink href={'/products'} inverted={false}>
							Continue shopping
						</ArrowLink>
					</>
				) : (
					<>
						<h1>Error</h1>
						<p>{error}</p>
					</>
				)}
			</div>
		</Section>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Thank you',
		description: 'Thank you for your order at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you`,
	});
}
