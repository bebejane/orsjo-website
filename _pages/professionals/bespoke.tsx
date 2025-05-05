import s from './bespoke.module.scss';
import cn from 'classnames';
import { BespokeDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { PageProps } from '@/lib/context/page';
import { ProjectThumbnail, Section, TextReveal } from '@/components';
import { recordImages, styleVariables } from '@/lib/utils';
import { shallow, useStore } from 'lib/store';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export type BespokeProps = { bespoke: BespokeRecord };

export default function Bespoke({ bespoke }: BespokeProps) {
	const [setGallery, setGalleryId] = useStore(
		(state) => [state.setGallery, state.setGalleryId],
		shallow
	);
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const [imageStyle, setImageStyle] = useState({ opacity: 0.2, filter: 'grayscale(1)' });
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);

	useEffect(() => {
		setGallery({ images: recordImages(bespoke) });
	}, [bespoke, setGallery]);

	const viewportScrollRatio = 1 - (viewportHeight - scrolledPosition) / viewportHeight;

	useEffect(() => {
		setImageStyle({
			opacity: Math.min(0.2 + (viewportScrollRatio || 0) * 4, 1),
			filter: `grayscale(${Math.max(1 - viewportScrollRatio * 4, 0)})`,
		});
	}, [viewportScrollRatio, setImageStyle]);

	return (
		<>
			<Section className={s.bespoke} type={'full'}>
				<Image
					data={bespoke.image.responsiveImage}
					layout='fill'
					objectFit='cover'
					className={s.image}
					style={!isMobile ? imageStyle : undefined}
				/>
				<h1>
					<TextReveal block={true}>Custom-Made Lighting</TextReveal>
				</h1>
			</Section>
			<Section name='Intro' className={s.intro} type='margin' bgColor={'--gray'}>
				<h1>{bespoke.title}</h1>
				<Markdown className={s.text}>{bespoke.intro}</Markdown>
			</Section>
			<Section className={s.projects} type='margin' bgColor={'--gray'}>
				{bespoke.examples.map(({ project, summary }, idx) => {
					return (
						<div className={s.project} key={idx}>
							<div
								className={s.image}
								onClick={() => setGalleryId((project.secondaryImage || project.image).id)}
							>
								<Image
									className={s.big}
									data={project.secondaryImage?.responsiveImage || project.image.responsiveImage}
								/>
							</div>
							<div className={s.description}>
								<Markdown className={cn(s.text, 'large')}>{summary}</Markdown>
								<ProjectThumbnail project={project} theme='mid' className={s.thumbnail} />
							</div>
						</div>
					);
				})}
			</Section>
			<Section name='Outro' className={s.outro} type='full' bgColor={'--gray'}>
				<div className={s.innerWrap}>
					<Markdown className={s.text}>{bespoke.outro}</Markdown>
				</div>
			</Section>
			<Section name='More' className={s.more} type='full' bgColor={'--gray'} bottom={true}>
				<div className={s.innerWrap}>
					<Link href='/professionals/projects' passHref={true}>
						<button>Show more commercial projects</button>
					</Link>
				</div>
			</Section>
		</>
	);
}

Bespoke.page = {
	title: 'Bespoke',
	layout: 'full',
	color: '--gray',
	menu: 'inverted',
	sidebar: false,
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [BespokeDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
