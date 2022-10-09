import styles from './cart.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { PageProps } from '/lib/context/page';
import { Section } from '/components';
import useCart from '../../lib/shopify/hooks/useCart';

type Props = {
	p
}

export default function CartPage({  }: Props) {

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
								<td>{node.merchandise.product.title}</td>
								<td>{node.quantity} </td>
								
								
								<td>{node.cost?.totalAmount.amount}</td>
							</tr>
						)}
						<tr>
							<td colSpan={2}>Total</td>
							<td>{cart.estimatedCost.totalAmount.amount}</td>
						</tr>
					</table>
					<button onClick={()=> location.href = cart.checkoutUrl}>BUY!</button>
				</>
			}
		</Section>
	)
}

CartPage.page = { layout: 'normal', color: '--white', menu: 'normal' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {


	return {
		props: {
			...props,
		},
		revalidate
	};
});