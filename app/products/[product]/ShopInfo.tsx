'use client';

import s from './ShopInfo.module.scss';
import React from 'react';
import { ProductPageDataProps } from '../utils';
import { Section } from '@/components';

type Props = {
	files: ProductPageDataProps['files'];
};

export default function ShopInfo({ files }: Props) {
	return (
		<Section name='Shipping' className={s.shipping} bgColor='--white' fadeColor={'#ffffff'}>
			<p className='small'>
				● In stock, ships within 1-3 days. Free shipping. <span className='gray'> More info ›</span>
			</p>
		</Section>
	);
}
