import { apiQuery } from 'next-dato-utils/api';
import { Block, Section } from '@/components';
import { StartDocument } from '@/graphql';

export default async function Home(props: PageProps<'/[country]'>) {
	const { start } = await apiQuery(StartDocument);
	return (
		<>
			{start?.content.map((block, idx) => (
				<Section key={idx} type='full'>
					<Block data={block} first={idx === 0} />
				</Section>
			))}
		</>
	);
}
