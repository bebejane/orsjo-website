'use client';

import React, { useEffect, useState } from 'react';
import s from './Cart.module.scss';
import cn from 'classnames';
import { default as useCart, useShallow } from '@/lib/shopify/hooks/useCart';
import { parseGid } from '@/lib/shopify/utils';
import CountrySelector from './CountrySelector';
import Loader from '@/components/common/Loader';
import Link from '@/components/nav/Link';
import { usePathname } from 'next/navigation';
import { formatPrice } from '@/lib/shopify/utils';
import useCountry from '@/lib/shopify/hooks/useCountry';

export type CartProps = {
	localization: LocalizationQuery['localization'];
};

export default function Cart({ localization }: CartProps) {
	const [
		cart,
		createCart,
		removeFromCart,
		updateQuantity,
		updateBuyerIdentity,
		updating,
		updatingId,
		cartError,
	] = useCart(
		useShallow((state) => [
			state.cart,
			state.createCart,
			state.removeFromCart,
			state.updateQuantity,
			state.updateBuyerIdentity,
			state.updating,
			state.updatingId,
			state.error,
		])
	);

	const country = useCountry();
	const pathname = usePathname();
	const [showCart, setShowCart] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const isEmpty = cart && cart?.lines?.edges?.length > 0 ? false : true;
	const loading = !cart || updating;
	const totalItems = cart?.lines.edges.reduce(
		(total, { node: { quantity } }) => total + quantity,
		0
	);
	const [terms, setTerms] = useState(false);

	useEffect(() => {
		if (!cart) createCart(country);
	}, [cart, createCart]);

	useEffect(() => {
		createCart(country);
	}, [pathname]);

	useEffect(() => {
		if (cart && country && cart?.buyerIdentity.countryCode !== country)
			updateBuyerIdentity({ countryCode: country } as CartBuyerIdentityInput);
	}, [country, cart]);

	useEffect(() => {
		setShowCart(false);
	}, [pathname]);
	useEffect(() => {
		// Toggle Accessibly App widget button
		document
			.getElementById('accessiblyAppWidgetButton')
			?.style.setProperty('display', showCart ? 'none' : 'block');
	}, [showCart]);

	if (!showCart) {
		return (
			<div className={s.miniCart}>
				<button
					aria-label='Open cart'
					className={cn(!isEmpty && s.inverted, loading && s.loading)}
					onClick={() => setShowCart(true)}
				>
					<div className={s.icon}>
						<img src={`/images/cart${!isEmpty ? '_inverted' : ''}.svg`} alt='Open cart' />
						{updating && <Loader loading={true} className={s.loader} invert={!isEmpty} />}
					</div>
					<div className={s.count} aria-label={`${totalItems} items in cart`}>
						{!isEmpty && totalItems}
					</div>
				</button>
			</div>
		);
	}

	return (
		<div id='cart' className={cn(s.cart, showCart && s.show, updating && s.updating)}>
			<header>
				<h3>Cart</h3>
				<div className={s.currency}>
					<CountrySelector localization={localization} label='Location' className={s.form} />
				</div>

				<button aria-label='Close cart' className={s.close} onClick={() => setShowCart(false)}>
					<img src='/images/close.svg' alt='Close' />
				</button>
			</header>
			{isEmpty ? (
				<div className={s.empty}>Your cart is empty</div>
			) : (
				<>
					<ul className={s.items} aria-label='Cart items'>
						{cart?.lines.edges.map(({ node: { id, quantity, cost, merchandise } }, idx) => (
							<li key={idx} className={cn(updatingId === id && s.updating)} aria-labelledby={id}>
								<figure className={s.thumb}>
									<Link
										href={`/products/${merchandise.product.handle}?variant=${parseGid(merchandise.id)}`}
									>
										<img
											role='icon'
											src={merchandise.image?.url}
											alt={merchandise.image?.altText ?? ''}
										/>
									</Link>
								</figure>

								<div className={s.details}>
									<div id={id}>{merchandise.product.title}</div>
									<div className='light'>
										{merchandise.selectedOptions.map(({ value }) => value).join(' ')}
									</div>
									<div aria-label='Quantity'>
										<button
											className={s.minus}
											onClick={() => updateQuantity(id, quantity - 1, country)}
											disabled={quantity === 1}
										>
											-
										</button>
										{quantity}
										<button
											className={s.plus}
											onClick={() => updateQuantity(id, quantity + 1, country)}
										>
											+
										</button>
									</div>
								</div>

								<div className={s.amount}>
									<div className={s.price} aria-label={'Total'}>
										{formatPrice(cost.subtotalAmount.amount)} {cost.subtotalAmount.currencyCode}
									</div>
									<div>
										<button className={cn(s.remove, 'light')} onClick={() => removeFromCart(id)}>
											Remove
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>

					<div className={s.total}>
						<div>Total</div>
						<div className={s.price}>
							{formatPrice(cart?.cost.totalAmount.amount)} {cart?.cost.totalAmount.currencyCode}
						</div>
					</div>
					<div className={cn(s.extra, 'light')}>Shipping and tax are added at checkout</div>

					<form action={cart?.checkoutUrl.split('?')[0]} method='GET'>
						<input type='hidden' name='key' id='key' value={cart?.checkoutUrl.split('?key=')[1]} />
						<div className={cn(s.check, 'light')}>
							<input
								type='checkbox'
								name='terms'
								required
								onChange={(e) => setTerms(e.target.checked)}
							/>
							<span>
								I accept the <Link href='/legal/terms-conditions'>terms & conditions</Link> and I
								have read and understood the{' '}
								<Link href='/legal/privacy-policy'>privacy policy</Link>.
							</span>
						</div>
						<button disabled={!terms} className={cn(s.checkout, 'full')} type='submit'>
							Checkout & pay
						</button>
					</form>
				</>
			)}
			{error && <div className={s.error}>{error}</div>}
			{cartError && <div className={s.error}>{cartError}</div>}
		</div>
	);
}
