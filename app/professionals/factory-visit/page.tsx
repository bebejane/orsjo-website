import s from './page.module.scss';
import { FactoryVisitDocument } from '@/graphql';
import { Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';

export default async function FactoryVisit() {
	const { factoryVisit } = await apiQuery<FactoryVisitQuery, FactoryVisitQueryVariables>(
		FactoryVisitDocument
	);

	if (!factoryVisit) notFound();

	return (
		<Section className={s.downloads} top={true}>
			<h1>{factoryVisit.title}</h1>
			<Markdown content={factoryVisit.intro} />
		</Section>
	);
}
