'use client';

import s from './ShopInfo.module.scss';
import React from 'react';
import { ProductPageDataProps } from '../utils';
import { Section } from '@/components';
import { deliveryDaysText } from '@/lib/utils';

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

	return (
		<Section name='Shipping' className={s.shipping} bgColor='--white' fadeColor={'#ffffff'}>
			<p className='small'>
				{other.length === 0 ? (
					<>{deliveryDaysText[average]}</>
				) : (
					<ul>
						{variants.map((v) => (
							<li>
								{v.articleNo}: {deliveryDaysText[v.deliveryDays as string]}
							</li>
						))}
					</ul>
				)}
				<br />
				Free shipping on all orders over 5000 SEK. <span className='gray'> More info ›</span>
			</p>
		</Section>
	);
}
