import { withGlobalProps } from "/lib/hoc";
import { LastNewsDocument, StartDocument } from '/graphql';
import { FeaturedStart, FullscreenMedia, FullscreenVideo, ImageLink, NewsItem, Section } from '/components';
import { PageLayoutProps } from '/lib/context/layout';

export type StartProps = {start:StartRecord, lastNews: NewsRecord[]}

export default function Start({start : { content }, lastNews } : StartProps) {
	
	return (
		<>
			{content.map((block, idx) => {
				switch (block.__typename) {
					case 'FullscreenMediaBlockRecord':
						return <Section key={idx} type="full"><FullscreenMedia data={block}/></Section>
					case 'FeaturedRecord':
						return <Section key={idx} type="full"><FeaturedStart data={block} /></Section>
					case 'FullscreenVideoRecord':
						return <Section key={idx} type="full"><FullscreenVideo data={block} /></Section>
					case 'ImageLinkRecord':
						return <Section key={idx} type="full"><ImageLink data={block} /></Section>
					case 'NewsItemRecord':
						return <Section key={idx} type="full"><NewsItem data={block} /></Section>
					default:
						return null
				}
			})}
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