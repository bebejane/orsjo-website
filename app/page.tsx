import { apiQuery } from 'next-dato-utils/api';
import { Block, Section } from '@/components';
import { StartDocument } from '@/graphql';
import { getDatoCmsConfig, getDatoCmsConfig2 } from 'next-dato-utils/config';

export default async function Home({ searchParams }) {
	const { start } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument);
	const config = await getDatoCmsConfig2();
	console.log(JSON.stringify(config));
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
