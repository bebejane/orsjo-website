import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import {
	ProductStartDocument,
	AllProductsLightDocument,
	AllProductCategoriesDocument,
} from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
import * as geins from '@/geins/merchant-api';
import { CheckoutDocument } from '@/geins/graphql';

export type ProductsByCategory = {
	products: ProductRecord[];
	name: string;
	namePlural: string;
};

export type ProductsStartProps = {
	productStart: ProductStartRecord;
	products: ProductRecord[];
	productCategories: ProductCategoryRecord[];
};

export default async function Checkout({ params }: PageProps<'/[locale]/checkout'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	return (
		<div className={s.page} id='checkout'>
			Checkout
		</div>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/checkout'>): Promise<Metadata> {
	return await buildMetadata({
		title: 'Checkout',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
	});
}
