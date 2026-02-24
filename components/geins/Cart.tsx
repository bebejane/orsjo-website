'use client';

import React, { useEffect, useRef, useState } from 'react';
import s from './Cart.module.scss';
import cn from 'classnames';
import { default as useCart, useShallow } from '@/geins/hooks/useCart';
import CountrySelector from './CountrySelector';
import Loader from '@/components/common/Loader';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import useStore from '@/lib/store';
import { useClickAway } from 'react-use';
import { deliveryDaysText } from '@/lib/utils';
import { Checkbox } from '@/components/common/Checkbox';
import { Link } from '@/i18n/routing';
import CartError from '@/components/geins/CartError';
import { formatGeinsPrice, getProductImageUrl } from '@/geins/utils';

export type CartProps = {
	markets: MarketType[];
	shipping: ShippingQuery['shipping'];
};

export default function Cart({ markets, shipping }: CartProps) {
	const [
		cart,
		createCart,
		removeFromCart,
		updateQuantity,
		updateBuyerIdentity,
		updating,
		updatingId,
		cartError,
		clearError,
		createCheckoutToken,
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
			state.clearError,
			state.createCheckoutToken,
		]),
	);
	const [showCart, setShowCart] = useStore(
		useShallow((state) => [state.showCart, state.setShowCart]),
	);
	const country = useLocale();
	const pathname = usePathname();
	const [error, setError] = useState<Error | string | null | undefined>(null);
	const isEmpty = cart && cart?.items?.length ? false : true;
	const loading = !cart || updating;
	const [terms, setTerms] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const checkboxRef = useRef<HTMLInputElement>(null);
	const [checkoutToken, setCheckoutToken] = useState('');

	function handleCloseError() {
		if (cartError) clearError();
		if (error) setError(null);
	}

	useClickAway(ref, () => setShowCart(false));

	useEffect(() => {
		if (!cart) createCart(country);
	}, [cart, createCart]);

	useEffect(() => {
		try {
			createCart(country);
		} catch (err) {
			setError(err as Error);
		}
	}, [pathname]);

	useEffect(() => {
		if (cart && country) {
			try {
				//@ts-ignore
				updateBuyerIdentity({ countryCode: country.toUpperCase() });
			} catch (err) {
				setError(err as Error);
			}
		}
	}, [country]);

	useEffect(() => {
		setShowCart(false);
	}, [pathname]);

	useEffect(() => {
		//setError(new Error('Error message from useEffect. Blah blah blah.'));
	}, [showCart]);
	console.log(cart);
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
						{cart?.items?.map((item, idx) => {
							if (!item) return null;
							const { id, quantity, product, unitPrice } = item;
							const skuId = product?.skus?.[0]?.skuId;
							const deliveryDays = '';
							const deliveryDaysText =
								shipping?.deliveryDays.find(({ time }) => time === deliveryDays)?.textShort ?? '';
							const slug = product?.categories?.[0]?.alias;
							const imageUrl = getProductImageUrl(product as ProductType);

							return (
								<li
									key={idx}
									className={cn(updatingId === item.id && s.updating)}
									aria-labelledby={id}
								>
									<figure className={s.thumb}>
										<Link href={`/products/${slug}?v=${id}`} onClick={() => setShowCart(false)}>
											{imageUrl && <img role='icon' src={imageUrl} alt={''} />}
										</Link>
									</figure>

									<div className={s.details}>
										<div className='small' id={id}>
											{product?.name}
										</div>
										<div className={cn(s.descStock, 'small gray')}>
											{/* {merchandise.selectedOptions?.[0]?.value} */}
											Text
										</div>
										<div className={cn(s.quantity, 'small')} aria-label='Quantity'>
											<button
												className={cn(s.minus)}
												onClick={() => updateQuantity(id, quantity - 1, country)}
												disabled={quantity === 1}
											>
												<span>–</span>
											</button>
											<span>{quantity}</span>
											<button
												className={s.plus}
												onClick={() => updateQuantity(id, quantity + 1, country)}
											>
												<span>+</span>
											</button>
										</div>
									</div>

									<div className={s.amount}>
										<div className={cn(s.price, 'small')} aria-label={'Total'}>
											{formatGeinsPrice(unitPrice?.sellingPriceIncVat, 'SEK')}
										</div>
										<div className='small gray'>{deliveryDaysText}</div>
										<div>
											<button
												className={cn(s.remove, 'small')}
												onClick={() => skuId && removeFromCart(id, skuId)}
											>
												Remove
											</button>
										</div>
									</div>
								</li>
							);
						})}
					</ul>

					<div className={s.total}>
						<div className='medium'>Total</div>
						<div className={cn('medium', s.price)}>{formatGeinsPrice(0, 'SEK')}</div>
					</div>
					<div className={s.currency}>
						<CountrySelector markets={markets} className={s.form} />
					</div>
					<form
						action={`/api/geins/checkout`}
						method='GET'
						onSubmit={async (e) => {
							// e.preventDefault();
							// try {
							// 	const urls =
							// 	window.open(token);
							// } catch (err) {
							// 	console.log(err);
							// }
						}}
					>
						<input type='hidden' name='cart_id' value={cart?.id} />
						<div className={cn(s.terms, 'medium')}>
							<Checkbox
								name='terms'
								onChange={(checked) => setTerms(checked)}
								inputRef={checkboxRef}
								className={s.checkbox}
							/>
							<span className='small'>
								I accept the <Link href='/support/terms-conditions'>terms & conditions</Link> and I
								have read and understood the{' '}
								<Link href='/support/privacy-policy'>privacy policy</Link>.
							</span>
						</div>
						<button
							className={cn(s.checkout, !terms && s.disabled, 'full')}
							type='submit'
							onClick={(e) => {
								if (terms) return true;
								e.preventDefault();
								checkboxRef.current?.focus();
							}}
						>
							Checkout & pay
						</button>
					</form>
				</>
			)}
			{(error ?? cartError) && (
				<CartError error={error ?? cartError} closeLabel='Close' onClose={handleCloseError} />
			)}
		</div>
	);
}
