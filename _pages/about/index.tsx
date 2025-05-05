import styles from './index.module.scss';
import { AboutDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import { Image } from 'react-datocms';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import type { PageProps } from '@/lib/context/page';
import { Section, VideoPlayer, TextReveal } from '@/components';
import cn from 'classnames';

export type AboutProps = { about: AboutRecord };

export default function About({ about: { title, video, intro, sections } }: AboutProps) {
	return (
		<>
			<Section className={styles.about} type='full'>
				<div className={styles.hero}>
					<VideoPlayer className={styles.heroImage} data={video} />
					<div className={styles.header}>
						<h1>
							<TextReveal block={true}>{title}</TextReveal>
						</h1>
					</div>
				</div>
			</Section>
			<Section className={styles.intro} type='margin'>
				<Markdown className={styles.text}>{intro}</Markdown>
			</Section>
			<Section className={styles.blocks} type='full'>
				{sections.map(({ text, video }, idx) => (
					<div className={styles.block} key={idx}>
						<div className={styles.left}>
							<Markdown className={cn(styles.text, 'large')}>{text}</Markdown>
						</div>
						<div className={styles.right}>
							<VideoPlayer className={styles.video} data={video} />
						</div>
					</div>
				))}
			</Section>
		</>
	);
}

About.page = {
	title: 'About Us',
	layout: 'full',
	color: '--black',
	menu: 'inverted',
	footerLine: true,
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [AboutDocument], model: 'about' },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
