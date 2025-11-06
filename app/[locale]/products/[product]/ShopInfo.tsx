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
};

export default function ShopInfo({ product }: Props) {
	if (!product) return null;

	return (
		<Section name='Shipping' className={s.shipping} bgColor='--white' fadeColor={'#ffffff'}>
			<p className='small'>
				{Object.keys(deliveryDaysText).map((key) => (
					<React.Fragment key={key}>
						<span className={cn(s.delivery, s[key])} />
						<span>{deliveryDaysText[key]?.full}</span>
					</React.Fragment>
				))}
				<br />
				Free shipping on all orders over 5000 SEK. &nbsp;
				<Link href='/support/terms'>
					<span className='gray'>More info ›</span>
				</Link>
			</p>
		</Section>
	);
}
