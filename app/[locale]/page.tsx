import { apiQuery } from 'next-dato-utils/api';
import { Block, Section } from '@/components';
import { StartDocument } from '@/graphql';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import geinsQuery from '@/lib/geins/geins-query';
import { AllGeinsProductsDocument } from '@/lib/geins/graphql';

export default async function Home({ params }: PageProps<'/[locale]'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);
	const { start } = await apiQuery(StartDocument);

	if (!start) return notFound();

	const { products } = await geinsQuery(AllGeinsProductsDocument);
	console.log(products);
	return (
		<>
			{start?.content.map((block, idx) => (
				<Block key={idx} data={block} first={idx === 0} />
			))}
		</>
	);
}
