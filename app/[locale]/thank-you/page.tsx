import s from './page.module.scss';
import { Link } from '@/i18n/routing';
import geinsQuery from '@/geins/geins-query';
import { CartDocument, CheckoutDocument, CompletCartDocument } from '@/geins/graphql';

export const dynamic = 'auto';

export default async function ThankYou({ searchParams }: PageProps<'/[locale]/thank-you'>) {
	const params = await searchParams;
	const cartId = params['geins-cart'] as string;
	const checkoutId = params['geins-uid'] as string;
	console.log({ cartId, checkoutId });
	let error: string | null = null;
	let cart: CartType | null = null;
	let checkout: CheckoutDataType | null = null;

	try {
		if (!cartId) throw 'Invalid request';
		else cart = (await geinsQuery(CartDocument, { variables: { id: cartId } })).getCart as CartType;

		if (!cart?.isCompleted)
			cart = (
				await geinsQuery(CompletCartDocument, {
					variables: { id: cartId },
				})
			).completeCart as CartType;

		if (!cart) throw 'Cart not found with id: ' + cartId;

		console.log({ checkoutId });
		checkout = (await geinsQuery(CheckoutDocument, { variables: { id: checkoutId } }))
			.checkout as CheckoutDataType;

		console.log({ checkout });
	} catch (e) {
		error = typeof e === 'string' ? e : (e as Error).message;
	}

	return (
		<div className={s.page}>
			<div className={s.wrap}>
				{!error ? (
					<>
						<h1>Thank you for your order!</h1>
						<p>Your order has been placed and is being processed.</p>
						<p>
							You will receive an email with your order details shortly. If you have any questions,
							please contact us at <a href={`mailto:order@orsjo.com`}>order@orsjo.com</a>.
						</p>
						<p>
							<Link href={'/products'}>Continue shopping</Link>
						</p>
					</>
				) : (
					<>
						<h1>Error</h1>
						<p>{error}</p>
					</>
				)}
			</div>
		</div>
	);
}
