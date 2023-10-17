import withGlobalProps from "/lib/withGlobalProps";
import { LastNewsDocument, StartDocument } from '/graphql';
import { Block, Section } from '/components';
import { PageProps } from '../lib/context/page';
import { useLivePreview } from "dato-nextjs-utils/hooks";

export type StartProps = { start: StartRecord, preview: boolean }

export default function Start(props: StartProps) {

	const { data: { start: { content } }, error, status } = useLivePreview(StartDocument, props, { preview: props.preview })

	return (
		<>
			{error && <div>{error.message}</div>}
			{content?.map((block, idx) =>
				<Section key={idx} type="full">
					<Block data={block} first={idx === 0} />
				</Section>
			)}
		</>
	)
}

Start.page = { layout: 'full', color: '--black', menu: 'inverted', sidebar: false } as PageProps

export const getStaticProps = withGlobalProps({ queries: [StartDocument, LastNewsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});