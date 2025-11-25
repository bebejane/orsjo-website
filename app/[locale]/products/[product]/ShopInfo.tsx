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
	currencyCode: CurrencyCode;
};

export default function ShopInfo({ product, shipping, currencyCode }: Props) {
	if (!product) return null;

	const deliverTerms =
		shipping?.deliveryTerms.find(({ isoCode }) => isoCode === currencyCode)?.text ?? shipping?.deliveryTermsOther;

	return (
		<Section name='Shipping' className={s.shopinfo} bgColor='--white' fadeColor={'#ffffff'} bottom={true}>
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
		</Section >
	);
}
