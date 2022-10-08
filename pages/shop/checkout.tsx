import styles from './checkout.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { PageProps } from '/lib/context/page';
import { Section } from '/components';
import useCart from '/lib/shopify/cart';

type Props = {
	p
}

export default function Checkout({  }: Props) {

	const [
		cart,
		setCart,
		removeFromCart,
		addToCart,
		clearCart
	] = useCart((state) => [state.cart, state.setCart, state.removeFromCart, state.addToCart, state.clearCart])
	
	const isEmpty = !cart || cart.lines.edges.length === 0 

	return (
		<Section className={styles.checkout} top={true}>
			{isEmpty && 'Empty...'}
			{!isEmpty &&
				<>
					<h1>Checkout</h1>
					<table>
						{cart?.lines.edges.map(({ node }, idx) =>
							<tr key={idx}>
								<td>{node.quantity} </td>
								<td>X</td>
								<td>{node.merchandise.product.title}</td>
								<td>{node.cost?.totalAmount.amount}</td>
							</tr>
						)}
						<tr>
							<td colSpan={3}>Total</td>
							<td>{cart.estimatedCost.totalAmount.amount}</td>
						</tr>
					</table>
					<button onClick={()=> location.href = cart.checkoutUrl}>BUY!</button>
				</>
			}
		</Section>
	)
}

Checkout.page = { layout: 'normal', color: '--white', menu: 'normal' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {


	return {
		props: {
			...props,
		},
		revalidate
	};
});