import styles from './index.module.scss'
import { withGlobalProps } from "/lib/hoc";
import { GetLastNews, GetStart } from '/graphql';
import { Featured, FullscreenImage, FullscreenVideo, ImageLink } from '/components';
import { PageLayoutProps } from '/lib/context/layout';

export type StartProps = {start:StartRecord, lastNews: NewsRecord[]}

export default function Start({start : { content }, lastNews } : StartProps) {
	
	const news = lastNews[0]
	
	return (
		<div className={styles.start}>
			{content.map(block => {
				switch (block.__typename) {
					case 'FullscreenImageRecord':
						return <FullscreenImage data={block} />
					case 'FeaturedRecord':
						return <Featured data={block} />
					case 'FullscreenVideoRecord':
						return <FullscreenVideo data={block} />
					case 'ImageLinkRecord':
						return <ImageLink data={block} />
					default:
						return null
				}
			})}
			<section className={styles.news}>
				<h1>News</h1>
				<span className={styles.text}>
					{news.title}
					<div className={styles.more}>
						Read more <img src="/images/arrow.svg" className={styles.arrow}/>
					</div>
				</span>
			</section>
		</div>
	)
}

Start.layout = {layout:'full', color:'#121212', menu:'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({queries:[GetStart, GetLastNews]}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});