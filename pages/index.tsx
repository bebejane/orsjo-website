import { withGlobalProps } from "/lib/hoc";
import { LastNewsDocument, StartDocument } from '/graphql';
import { Block, Section } from '/components';
import { PageLayoutProps } from '/lib/context/layout';

export type StartProps = {start:StartRecord, lastNews: NewsRecord[]}

export default function Start({start : { content }, lastNews } : StartProps) {
	
	return (
		<>
			{content.map((block, idx) => 
				<Section key={idx} type="full">
					<Block data={block}/>
				</Section>
			)}
		</>
	)
}

Start.layout = {layout:'full', color:'--black', menu:'inverted', sidebar:false} as PageLayoutProps

export const getStaticProps = withGlobalProps({queries:[StartDocument, LastNewsDocument]}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});