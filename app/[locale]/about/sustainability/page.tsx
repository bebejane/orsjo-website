import s from './page.module.scss';
import { SustainabilityDocument } from '@/graphql';
import cn from 'classnames';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import { Section, TextReveal, VideoPlayer } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export default async function Sustainability({ params }: PageProps<'/[locale]/about/sustainability'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { sustainability } = await apiQuery(SustainabilityDocument);
	if (!sustainability) return notFound();

	const { title, intro, steps, image } = sustainability;

	return (
		<>
			<Section className={s.sustainability} type='full'>
				<div className={s.hero}>
					{image.responsiveImage && <Image data={image.responsiveImage} className={s.heroImage} objectFit='cover' />}
					<div className={s.header}>
						<h1>
							<TextReveal block={true}>{title}</TextReveal>
						</h1>
					</div>
				</div>
			</Section>
			<Section className={s.intro} type='margin'>
				<Markdown className={s.text} content={intro} />
			</Section>
			<Section className={s.blocks} type='full'>
				{steps.map(({ text, title, media, fullWidthImage }, idx) => (
					<div className={cn(s.block, fullWidthImage && s.fullWidth)} key={idx}>
						<div className={s.left}>
							<div className={s.header}>
								<h2>{title}</h2>
								<span>N°{idx + 1}</span>
							</div>
							<Markdown className={s.text} content={text} />
						</div>
						<div className={s.right}>
							{media.video ? (
								<VideoPlayer className={s.video} data={media as FileField} />
							) : media.responsiveImage ? (
								<Image data={media.responsiveImage} className={s.image} intersectionMargin={`0px 0px 2000px 0px`} />
							) : null}
						</div>
					</div>
				))}
			</Section>
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Sustainability',
	};
}
