'use client';

import s from './ShopInfo.module.scss';
import cn from 'classnames';
import React from 'react';
import { ProductPageDataProps } from '../utils';

type Props = {
	files: ProductPageDataProps['files'];
};

export default function ShopInfo({ files }: Props) {
	return <section className={s.shopinfo}>shop info</section>;
}
