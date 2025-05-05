import s from './index.module.scss';
import { AboutDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import type { PageProps } from '@/lib/context/page';
import { Section, VideoPlayer, TextReveal } from '@/components';
import cn from 'classnames';

export type AboutProps = { about: AboutRecord };

export default function About({ about: { title, video, intro, sections } }: AboutProps) {
	return (
		<>
			<Section className={s.about} type='full'>
				<div className={s.hero}>
					<VideoPlayer className={s.heroImage} data={video} />
					<div className={s.header}>
						<h1>
							<TextReveal block={true}>{title}</TextReveal>
						</h1>
					</div>
				</div>
			</Section>
			<Section className={s.intro} type='margin'>
				<Markdown className={s.text}>{intro}</Markdown>
			</Section>
			<Section className={s.blocks} type='full'>
				{sections.map(({ text, video }, idx) => (
					<div className={s.block} key={idx}>
						<div className={s.left}>
							<Markdown className={cn(s.text, 'large')}>{text}</Markdown>
						</div>
						<div className={s.right}>
							<VideoPlayer className={s.video} data={video} />
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
