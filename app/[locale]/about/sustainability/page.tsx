import s from './page.module.scss';
import { SustainabilityDocument } from '@/graphql';
import cn from 'classnames';
import { Image } from 'react-datocms';
<<<<<<< HEAD
import { Markdown } from 'next-dato-utils/components';
=======
import { DraftMode, Markdown } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { Section, TextReveal, VideoPlayer } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
<<<<<<< HEAD

export default async function Sustainability({ params }: PageProps<'/[locale]/about/sustainability'>) {
=======
import { buildMetadata } from '@/app/[locale]/layout';
import Link from 'next/link';

export default async function Sustainability({
	params,
}: PageProps<'/[locale]/about/sustainability'>) {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { sustainability } = await apiQuery(SustainabilityDocument);
=======
	const { sustainability, draftUrl } = await apiQuery(SustainabilityDocument);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	if (!sustainability) return notFound();

	const { title, intro, steps, image } = sustainability;

	return (
		<>
			<Section className={s.sustainability} type='full'>
				<div className={s.hero}>
<<<<<<< HEAD
					{image.responsiveImage && <Image data={image.responsiveImage} className={s.heroImage} objectFit='cover' />}
					<div className={s.header}>
						<h1>
=======
					{image.responsiveImage && (
						<Image data={image.responsiveImage} className={s.heroImage} objectFit='cover' />
					)}
					<div className={s.header}>
						<h1 className='big'>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
					<div className={cn(s.block, fullWidthImage && s.fullWidth)} key={idx}>
=======
					<div
						key={idx}
						className={cn(s.block, fullWidthImage && s.fullWidth)}
						data-datocms-content-link-source={fullWidthImage && media.responsiveImage?.alt}
					>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
								<Image data={media.responsiveImage} className={s.image} intersectionMargin={`0px 0px 2000px 0px`} />
							) : null}
						</div>
					</div>
				))}
			</Section>
=======
								<Image
									data={media.responsiveImage}
									className={s.image}
									intersectionMargin={`0px 0px 2000px 0px`}
								/>
							) : null}
						</div>

					</div>
				))}
				<Link href="https://www.datocms-assets.com/62617/1779863133-sustainabilityreport.pdf">
					<div className={s.report}><span className="medium">Download report</span></div>
				</Link>

			</Section>
			<DraftMode url={draftUrl} path='/about/sustainability' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'Sustainability',
	};
=======
	return buildMetadata({
		title: 'Sustainability',
		description: 'Sustainability at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/sustainability`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
