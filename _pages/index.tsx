import withGlobalProps from '/lib/withGlobalProps';
import { LastNewsDocument, StartDocument } from '/graphql';
import { Block, Section } from '/components';
import { PageProps } from '../lib/context/page';

export type StartProps = { start: StartRecord; lastNews: NewsRecord[] };

export default function Start({ start: { content }, lastNews }: StartProps) {
	return (
		<>
			{content.map((block, idx) => (
				<Section key={idx} type='full'>
					<Block data={block} first={idx === 0} />
				</Section>
			))}
		</>
	);
}

Start.page = { layout: 'full', color: '--black', menu: 'inverted', sidebar: false } as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [StartDocument, LastNewsDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
