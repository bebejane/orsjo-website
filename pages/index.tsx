import { withGlobalProps } from "/lib/hoc";
import { GetLastNewsDocument, GetStartDocument } from '/graphql';
import { FeaturedStart, FullscreenImage, FullscreenVideo, ImageLink, NewsItem, Section } from '/components';
import { PageLayoutProps } from '/lib/context/layout';

export type StartProps = {start:StartRecord, lastNews: NewsRecord[]}

export default function Start({start : { content }, lastNews } : StartProps) {
	
	return (
		<>
			{content.map((block, idx) => {
				switch (block.__typename) {
					case 'FullscreenImageRecord':
						return <Section type="full"><FullscreenImage key={idx} data={block}/></Section>
					case 'FeaturedRecord':
						return <Section type="full"><FeaturedStart key={idx} data={block} /></Section>
					case 'FullscreenVideoRecord':
						return <Section type="full"><FullscreenVideo key={idx} data={block} /></Section>
					case 'ImageLinkRecord':
						return <Section type="full"><ImageLink key={idx} data={block} /></Section>
					case 'NewsItemRecord':
						return <Section type="full"><NewsItem key={idx} data={block} /></Section>
					default:
						return null
				}
			})}
		</>
	)
}

Start.layout = {layout:'full', color:'--black', menu:'inverted', sidebar:false} as PageLayoutProps

export const getStaticProps = withGlobalProps({queries:[GetStartDocument, GetLastNewsDocument]}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});