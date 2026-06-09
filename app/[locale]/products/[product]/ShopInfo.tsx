'use client';

import s from './ShopInfo.module.scss';
import cn from 'classnames';
import React from 'react';
import { ProductPageDataProps } from '../utils';
import { Section } from '@/components';
import { deliveryDaysText } from '@/lib/utils';
import { Link } from '@/i18n/routing';

type Props = {
	product: ProductPageDataProps['product'];
	shipping: ShippingQuery['shipping'];
<<<<<<< HEAD
	currencyCode: CurrencyCode;
=======
	currencyCode: string;
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
};

export default function ShopInfo({ product, shipping, currencyCode }: Props) {
	if (!product) return null;

	const deliverTerms =
<<<<<<< HEAD
		shipping?.deliveryTerms.find(({ isoCode }) => isoCode === currencyCode)?.text ?? shipping?.deliveryTermsOther;

	return (
		<Section name='Shipping' className={s.shopinfo} bgColor='--white' fadeColor={'#ffffff'} bottom={true}>
=======
		shipping?.deliveryTerms.find(({ isoCode }) => isoCode === currencyCode)?.text ??
		shipping?.deliveryTermsOther;

	return (
		<Section
			name='Shipping'
			className={s.shopinfo}
			bgColor='--white'
			fadeColor={'#ffffff'}
			bottom={true}
		>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
			<div className='small'>
				{shipping?.deliveryDays.map(({ time, text }, idx) => (
					<p key={idx}>
						<React.Fragment key={time}>
							<span className={cn(s.delivery, s[time])} />
							<span>{text}</span>
						</React.Fragment>
					</p>
				))}
				<br />
				{deliverTerms}
				<p>
					<Link href='/support/terms-conditions'>
						<span className='gray'>&nbsp;&nbsp; More info ›</span>
					</Link>
				</p>
			</div>
<<<<<<< HEAD
		</Section >
=======
		</Section>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	);
}
