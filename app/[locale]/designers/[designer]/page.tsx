import s from './page.module.scss';
import {
	AllDesignersDocument,
	DesignerDocument,
	AllProductsByDesignerDocument,
	AllProductsLightDocument,
} from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { Image } from 'react-datocms';
import { ProductThumbnail, Section, FeaturedGallery, TextReveal } from '@/components';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

export default async function Designer({ params }: PageProps<'/[locale]/designers/[designer]'>) {
	const { locale, designer: slug } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { designer } = await apiQuery(DesignerDocument, {
		variables: { slug },
	});

	if (!designer) return notFound();

	const [{ allProducts }, { allProducts: products }, { allDesigners }] = await Promise.all([
		apiQuery(AllProductsLightDocument, {
			all: true,
		}),
		apiQuery(AllProductsByDesignerDocument, {
			variables: { id: designer.id },
			all: true,
		}),
		apiQuery(AllDesignersDocument, { all: true }),
	]);

	const designers = allDesigners
		.filter(({ id }) => allProducts.find((p) => p.designer?.id === id && p.designer?.id !== designer.id))
		.sort(() => (Math.random() > 0.5 ? 1 : -1));

	return (
		<>
			<Section type='full' className={s.designer}>
				<header>
					<div className={s.artist} key={designer.id}>
						<h1 className="big">
							<TextReveal block={true}>{designer.name}</TextReveal>
						</h1>
						<p className='large'>{designer.description}</p>
					</div>
					<figure>
						<div className={s.fade}></div>
						{designer.image?.responsiveImage && (
							<Image data={designer.image.responsiveImage} priority={true} className={s.wrap} />
						)}
						<figcaption>
							<h1>{designer.name}</h1>
						</figcaption>
					</figure>
				</header>
			</Section>
			<Section type='margin' className={s.products} bgColor='--mid-gray'>
				<h1>
					Products by <br />
					{designer.name}
				</h1>
				<div className={s.gallery}>
					<ul>
						{products.map((p, idx) => (
							<li key={idx}>
								<ProductThumbnail key={idx} product={p as ProductRecord} theme='light' />
							</li>
						))}
					</ul>
				</div>
			</Section>

			{
				<Section type='margin' className={s.otherDesigners} bgColor='--green'>
					<h1>Other designers</h1>
					<div className={s.gallery}>
						<FeaturedGallery
							id='all-designers'
							items={designers as DesignerRecord[]}
							theme='light'
							arrowAlign='middle'
							fadeColor={'--green'}
						/>
					</div>
				</Section>
			}
		</>
	);
}

export async function generateStaticParams() {
	const { allDesigners } = await apiQuery(AllDesignersDocument, {
		all: true,
	});
	const paths = allDesigners.map(({ slug: designer }) => ({ designer }));
	return paths;
}

export async function generateMetadata({ params }: PageProps<'/[locale]/designers/[designer]'>): Promise<Metadata> {
	const { designer: slug } = await params;
	const { designer } = await apiQuery(DesignerDocument, {
		variables: { slug },
	});
	if (!designer) return notFound();
	return await buildMetadata({
		title: designer.name,
		description: designer.description,
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/designers/${slug}`,
		image: designer.image as FileField,
	});
}
