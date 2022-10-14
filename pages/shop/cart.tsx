import styles from './cart.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { PageProps } from '/lib/context/page';
import { Section } from '/components';
import { useState } from 'react'
import useCart from '/lib/shopify/hooks/useCart';

type Props = {
	
}

export default function CartPage({  }: Props) {

	const [
		cart,
		setCart,
		removeFromCart,
		clearCart,
		updateQuantity
	] = useCart((state) => [state.cart, state.setCart, state.removeFromCart, state.clearCart, state.updateQuantity])
	
	const [form, setForm] = useState()

	

	const updateCart = () => {

	}

	const isEmpty = !cart || cart.lines.edges.length === 0 

	return (
		<Section className={styles.checkout} top={true}>
			{isEmpty && 'Empty...'}
			{!isEmpty &&
				<>
					<h1>Checkout</h1>
					<table>
						<tr>
							<th>Product</th>
							<th>Qty</th>
							<th>Price</th>
						</tr>
						{cart?.lines.edges.map(({ node }, idx) =>
							<tr key={idx}>
								<td>{node.merchandise.product.title}</td>
								<td>
									<input 
										type="number" 
										value={node.quantity} 
										onChange={(e)=> updateQuantity(node.id, parseInt(e.target.value))}
									/>
									</td>
								<td>{node.cost?.totalAmount.amount}</td>
							</tr>
						)}
						<tr className={styles.total}>
							<td colSpan={2}>Total</td>
							<td>{cart.estimatedCost.totalAmount.amount}</td>
						</tr>
						<tr className={styles.buttons}>
							<td colSpan={4}>
								<button onClick={clearCart}>Clear</button>
								<button onClick={updateCart}>Update</button>
								<button onClick={()=> location.href = cart.checkoutUrl}>Checkout</button>
							</td>
						</tr>
					</table>
					
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