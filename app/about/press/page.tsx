import s from './page.module.scss';
import { AllPressDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import { Metadata } from 'next';

export default async function Press() {
	const { presses } = await apiQuery<AllPressQuery, AllPressQueryVariables>(AllPressDocument);
	if (!presses) return notFound();
	return (
		<Section className={s.press} top={true} name='Introduction'>
			<h1>Press</h1>
			{presses.map(({ title, url }, idx) => (
				<a key={idx} href={url}>
					{title}
				</a>
			))}
		</Section>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Press',
	};
}
