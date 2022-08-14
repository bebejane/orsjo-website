import styles from './index.module.scss'
import { withGlobalProps } from "/lib/hoc";
import { GetLastNewsDocument, GetStartDocument } from '/graphql';
import { FeaturedStart, FullscreenImage, FullscreenVideo, ImageLink, NewsItem } from '/components';
import { PageLayoutProps } from '/lib/context/layout';

export type StartProps = {start:StartRecord, lastNews: NewsRecord[]}

export default function Start({start : { content }, lastNews } : StartProps) {
	
	const news = lastNews[0]
	
	return (
		<div className={styles.start}>
			{content.map((block, idx) => {
				switch (block.__typename) {
					case 'FullscreenImageRecord':
						return <FullscreenImage key={idx} data={block} />
					case 'FeaturedRecord':
						return <FeaturedStart key={idx} data={block} />
					case 'FullscreenVideoRecord':
						return <FullscreenVideo key={idx} data={block} />
					case 'ImageLinkRecord':
						return <ImageLink key={idx} data={block} />
					case 'NewsItemRecord':
						return <NewsItem key={idx} data={block} />
					default:
						return null
				}
			})}
			
		</div>
	)
}

Start.layout = {layout:'full', color:'--black', menu:'inverted', sidebar:false} as PageLayoutProps

export const getStaticProps = withGlobalProps({queries:[GetStartDocument, GetLastNewsDocument]}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});