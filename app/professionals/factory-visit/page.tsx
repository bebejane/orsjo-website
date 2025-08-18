import s from './page.module.scss';
import { PageParams } from '@/app/[country]/professionals/factory-visit/page';
import { FactoryVisitDocument } from '@/graphql';
import { Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export default async function FactoryVisit(params: PageParams) {
	const { factoryVisit } = await apiQuery<FactoryVisitQuery, FactoryVisitQueryVariables>(FactoryVisitDocument);

	if (!factoryVisit) notFound();

	return (
		<Section className={s.downloads} top={true}>
			<h1>{factoryVisit.title}</h1>
			<Markdown content={factoryVisit.intro} />
		</Section>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Factory Visit',
	};
}
