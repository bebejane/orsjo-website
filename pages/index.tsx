import styles from './index.module.scss'
import { withGlobalProps } from "/lib/hoc";
import { GetStart } from '/graphql';
import { Featured, FullscreenImage, FullscreenVideo, ImageLink } from '/components';
import { PageLayoutProps } from '/lib/context/layout';

export type StartProps = {start:StartRecord}

export default function Start({start : { content }} : StartProps) {
	
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
		</div>
	)
}

Start.layout = {layout:'full', color:'#121212', menu:'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({queries:[GetStart]}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});