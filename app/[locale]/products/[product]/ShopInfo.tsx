'use client';

import s from './ShopInfo.module.scss';
import cn from 'classnames';
import React from 'react';
import { ProductPageDataProps } from '../utils';
import { Section } from '@/components';
import { generateProductTitle, formatProductColor, parseProductModelName, deliveryDaysText } from '@/lib/utils';

type Props = {
	product: ProductPageDataProps['product'];
};

export default function ShopInfo({ product }: Props) {
	if (!product) return null;

	const variants = product.models.flatMap((m) => m.variants);

	const short = variants.filter((v) => v.deliveryDays === 'short');
	const medium = variants.filter((v) => v.deliveryDays === 'medium');
	const shortest = short.length > 0 ? 'short' : medium.length > 0 ? 'medium' : 'long';
	const other = variants.filter((v) => v.deliveryDays !== shortest);
	const exceptions = {
		short: other.filter((v) => v.deliveryDays === 'short'),
		medium: other.filter((v) => v.deliveryDays === 'medium'),
		long: other.filter((v) => v.deliveryDays === 'long'),
	};

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
				Free shipping on all orders over 5000 SEK. <span className='gray'>More info ›</span>
			</p>
		</Section>
	);
}
