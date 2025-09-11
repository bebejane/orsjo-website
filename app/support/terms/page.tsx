import s from './page.module.scss';
import { PageParams } from '@/app/[country]/support/terms/page';
import { TermsStartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { Section } from '@/components';
import TermList from '@/app/support/terms/TermsList';
import { Metadata } from 'next';

export default async function Terms(params: PageParams) {
	const { allTerms, termStart } = await apiQuery<TermsStartQuery, TermsStartQueryVariables>(TermsStartDocument);
	if (!allTerms || !termStart) return notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='topMargin'>{termStart.title}</h1>
				<p>{termStart.intro}</p>
			</Section>
			<TermList terms={allTerms} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'FAQ',
	};
}
