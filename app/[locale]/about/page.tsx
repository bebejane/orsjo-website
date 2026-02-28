import s from './page.module.scss';
import cn from 'classnames';
import { AboutDocument } from '@/graphql';
import { DraftMode, Markdown } from 'next-dato-utils/components';
import { Section, VideoPlayer, TextReveal } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export default async function About({ params }: PageProps<'/[locale]/about'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { about, draftUrl } = await apiQuery(AboutDocument);
	if (!about) return notFound();

	const { title, intro, sections, video } = about;

	return (
		<>
			<Section className={s.about} type='full'>
				<div className={s.hero}>
					<VideoPlayer className={s.heroImage} data={video as FileField} />
					<div className={s.header}>
						<h1 className='big'>
							<TextReveal block={true}>{title}</TextReveal>
						</h1>
					</div>
				</div>
			</Section>
			<Section className={s.intro} type='margin'>
				<Markdown className={s.text} content={intro} />
			</Section>
			<Section className={s.blocks} type='full'>
				{sections.map(({ text, video }, idx) => (
					<div className={s.block} key={idx}>
						<div
							className={s.left}
							data-datocms-content-group
							data-datocms-content-link-source={text}
						>
							<Markdown className={cn(s.text, 'large')} content={text} />
						</div>
						<div className={s.right} data-datocms-content-link-source={video.video?.alt}>
							<VideoPlayer className={s.video} data={video as FileField} />
						</div>
					</div>
				))}
			</Section>
			<DraftMode url={draftUrl} path='/about' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'About Us',
	};
}
