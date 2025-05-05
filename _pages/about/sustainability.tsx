import s from './sustainability.module.scss';
import { SustainabilityDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import cn from 'classnames';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { Section, TextReveal, VideoPlayer } from '@/components';

export type SustainabilityProps = { sustainability: SustainabilityRecord };

export default function Sustainability({
	sustainability: { image, intro, title, steps },
}: SustainabilityProps) {
	return (
		<>
			<Section className={s.sustainability} type='full'>
				<div className={s.hero}>
					<Image data={image.responsiveImage} className={s.heroImage} objectFit='cover' />
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
				{steps.map(({ id, text, title, media, fullWidthImage }, idx) => (
					<div className={cn(s.block, fullWidthImage && s.fullWidth)} key={idx}>
						<div className={s.left}>
							<div className={s.header}>
								<h2>{title}</h2>
								<span>N°{idx + 1}</span>
							</div>
							<Markdown className={s.text}>{text}</Markdown>
						</div>
						<div className={s.right}>
							{media.video ? (
								<VideoPlayer className={s.video} data={media} />
							) : (
								<Image data={media.responsiveImage} className={s.image} lazyLoad={false} />
							)}
						</div>
					</div>
				))}
			</Section>
		</>
	);
}

Sustainability.page = {
	title: 'Sustainability',
	layout: 'full',
	color: '--black',
	menu: 'inverted',
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [SustainabilityDocument], model: 'sustainability' },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
