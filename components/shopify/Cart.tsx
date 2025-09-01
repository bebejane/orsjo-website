'use client';

import React, { useEffect, useRef, useState } from 'react';
import s from './Cart.module.scss';
import cn from 'classnames';
import { default as useCart, useShallow } from '@/lib/shopify/hooks/useCart';
import { parseGid } from '@/lib/shopify/utils';
import CountrySelector from './CountrySelector';
import Loader from '@/components/common/Loader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { formatPrice } from '@/lib/shopify/utils';
import useCountry from '@/lib/shopify/hooks/useCountry';
import useStore from '@/lib/store';
import { useClickAway } from 'react-use';

export type CartProps = {
	localization: LocalizationQuery['localization'];
};

export default function Cart({ localization }: CartProps) {
	const [cart, createCart, removeFromCart, updateQuantity, updateBuyerIdentity, updating, updatingId, cartError] =
		useCart(
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
	const [showCart, setShowCart] = useStore(useShallow((state) => [state.showCart, state.setShowCart]));
	const country = useCountry();
	const pathname = usePathname();
	const [error, setError] = useState<string | null>(null);
	const isEmpty = cart && cart?.lines?.edges?.length > 0 ? false : true;
	const loading = !cart || updating;
	const totalItems = cart?.lines.edges.reduce((total, { node: { quantity } }) => total + quantity, 0);
	const [terms, setTerms] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const checkboxRef = useRef<HTMLInputElement>(null);

	useClickAway(ref, () => setShowCart(false));

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

	return (
		<div id='cart' className={cn(s.cart, showCart && s.show, updating && s.updating)} ref={ref}>
			<header>
				<h1>Cart</h1>
				<button aria-label='Close cart' className={s.close} onClick={() => setShowCart(false)}>
					<img src='/images/close.svg' alt='Close' />
				</button>
			</header>
			{isEmpty ? (
				<div className={s.empty}>{loading ? <Loader /> : 'Your cart is empty'}</div>
			) : (
				<>
					<ul className={cn(s.items, 'medium')} aria-label='Cart items'>
						{cart?.lines.edges.map(({ node: { id, quantity, cost, merchandise } }, idx) => (
							<li key={idx} className={cn(updatingId === id && s.updating)} aria-labelledby={id}>
								<figure className={s.thumb}>
									<Link
										href={`/products/${merchandise.product.handle}?v=${parseGid(merchandise.id)}`}
										onClick={() => setShowCart(false)}
									>
										{merchandise.image?.url && (
											<img role='icon' src={merchandise.image?.url} alt={merchandise.image?.altText ?? ''} />
										)}
									</Link>
								</figure>

								<div className={s.details}>
									<div id={id}>{merchandise.product.title}</div>
									<div className={cn(s.descStock, 'small gray')}>{merchandise.selectedOptions[0].value}</div>
									<div className={s.quantity} aria-label='Quantity'>
										<button
											className={s.minus}
											onClick={() => updateQuantity(id, quantity - 1, country)}
											disabled={quantity === 1}
										>
											<span>–</span>
										</button>
										<span>{quantity}</span>
										<button className={s.plus} onClick={() => updateQuantity(id, quantity + 1, country)}>
											<span>+</span>
										</button>
									</div>
								</div>

								<div className={s.amount}>
									<div className={s.price} aria-label={'Total'}>
										{formatPrice(cost.subtotalAmount)}
									</div>
									<div className="medium gray">In stock</div>
									<div>
										<button className={cn(s.remove, 'medium gray')} onClick={() => removeFromCart(id)}>
											Remove
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>

					<div className={s.total}>
						<div className='medium'>Total</div>
						<div className={cn('medium', s.price)}>{formatPrice(cart?.cost.totalAmount as MoneyV2)}</div>
					</div>
					<div className={s.currency}>
						<CountrySelector localization={localization} label='Location' className={s.form} />
					</div>
					<div className={cn(s.extra, 'small', 'gray')}>
						<span className='small'>Shipping and tax are added at checkout</span>
					</div>

					<form action={cart?.checkoutUrl.split('?')[0]} method='GET'>
						<input type='hidden' name='key' id='key' value={cart?.checkoutUrl.split('?key=')[1]} />
						<div className={cn(s.check, 'medium')}>
							<input
								ref={checkboxRef}
								type='checkbox'
								name='terms'
								onChange={(e) => setTerms(e.target.checked)}
								required
							/>
							<span className='small'>
								I accept the <Link href='/legal/terms-conditions'>terms & conditions</Link> and I have read and
								understood the <Link href='/legal/privacy-policy'>privacy policy</Link>.
							</span>
						</div>
						<button
							className={cn(s.checkout, !terms && s.disabled, 'full')}
							type='submit'
							onClick={(e) => {
								if (terms) return;
								e.preventDefault();
								checkboxRef.current?.focus();
							}}
						>
							Checkout & pay
						</button>
					</form>
				</>
			)
			}
			{error && <div className={s.error}>{error}</div>}
			{cartError && <div className={s.error}>{cartError}</div>}
		</div >
	);
}
