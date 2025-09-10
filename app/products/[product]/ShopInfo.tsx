'use client';

import s from './ShopInfo.module.scss';
import React from 'react';
import { ProductPageDataProps } from '../utils';
import { Section } from '@/components';
import { deliveryDaysText, generateTitle } from '@/lib/utils';

type Props = {
	product: ProductPageDataProps['product'];
};

export default function ShopInfo({ product }: Props) {
	if (!product) return null;

	const variants = product.models.flatMap((m) => m.variants);

	const short = variants.filter((v) => v.deliveryDays === 'short');
	const medium = variants.filter((v) => v.deliveryDays === 'medium');
	const long = variants.filter((v) => v.deliveryDays === 'long');
	const accessories = product.models.flatMap((m) => m.accessories);
	const lightsources = product.models.flatMap((m) => m.lightsources);

	const average =
		short.length > medium.length && short.length > long.length
			? 'short'
			: medium.length > long.length
				? 'medium'
				: 'long';

	const other = variants.filter((v) => v.deliveryDays !== average);
	const exceptions = {
		short: other.filter((v) => v.deliveryDays === 'short'),
		medium: other.filter((v) => v.deliveryDays === 'medium'),
		long: other.filter((v) => v.deliveryDays === 'long'),
	};

	return (
		<Section name='Shipping' className={s.shipping} bgColor='--white' fadeColor={'#ffffff'}>
			<p className='small'>
				{deliveryDaysText[average]}{' '}
				{other.length &&
					`(Except: ${Object.keys(exceptions)
						.filter((k) => k !== average && exceptions[k].length)
						.map(
							(k) =>
								`${exceptions[k].map((v) => generateTitle(product as ProductRecord, v.id)).join(', ')} - ${deliveryDaysText[k]}`
						)
						.join(', ')})`}
				<br />
				Free shipping on all orders over 5000 SEK. <span className='gray'> More info ›</span>
			</p>
		</Section>
	);
}
