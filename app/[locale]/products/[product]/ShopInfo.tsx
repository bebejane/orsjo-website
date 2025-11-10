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
		<Section name='Shipping' className={s.shopinfo} bgColor='--white' fadeColor={'#ffffff'} bottom={true}>
			<div className='small'>
				{Object.keys(deliveryDaysText).map((key) => (
					<React.Fragment key={key}>
						<p>
							<span className={cn(s.delivery, s[key])} />
							<span>{deliveryDaysText[key]?.full}</span>
						</p>
					</React.Fragment>
				))}
				<p>
					Free shipping on all orders over 5000 SEK. &nbsp;
					<Link href='/support/terms-conditions'>
						<span className='gray'>More info ›</span>
					</Link>
				</p>
			</div>
		</Section>
	);
}
