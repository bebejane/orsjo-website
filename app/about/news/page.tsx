import { AllNewsDocument } from '@/graphql';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import NewsList from './NewsList';
import { Metadata } from 'next';

export default async function News() {
	const { allNews } = await apiQuery<AllNewsQuery, AllNewsQueryVariables>(AllNewsDocument);

	return (
		<>
			<Section name='Header' top={true}>
				<h1 className='bottomMargin topMargin white'>News</h1>
			</Section>
			<NewsList allNews={allNews} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'News',
	};
}
