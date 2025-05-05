import s from './page.module.scss';
import cn from 'classnames';
import {
	AllProductsLightDocument,
	ProductDocument,
	RelatedProductsDocument,
	AllProductsByCategoryDocument,
	RelatedProjectsForProductDocument,
} from '@/graphql';
import { SectionListItem, FeaturedGallery, Block, Section, Icon, TextReveal } from '@/components';
import {
	chunkArray,
	parseSpecifications,
	recordImages,
	dedupeImages,
	productDownloads,
	ProductRecordWithPdfFiles,
	styleVariables,
} from '@/lib/utils';
import { apiQuery } from 'next-dato-utils/api';
import { useStore, useShallow } from '@/lib/store';
import { Image } from 'react-datocms';
//import React, { useState, useEffect, useMemo } from 'react';
import { useScrollInfo } from 'next-dato-utils/hooks';
//import { useRouter } from 'next/router';
import type { PageProps } from '@/lib/context/page';
import type { ProductDownload } from '@/lib/utils';
import { Markdown } from 'next-dato-utils/components';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import { firstBy } from 'thenby';
import React from 'react';
import { notFound } from '@node_modules/next/navigation';

type Props = {
	params: Promise<{
		product: string;
	}>;
};

export default async function Product({ params }: Props) {
	const { product: slug } = await params;
	const res = await getProductPageData(slug);
	if (!res) return notFound();

	const {
		product,
		relatedProducts,
		relatedProjects,
		productsByCategory,
		drawings,
		specsCols,
		files,
	} = res;

	//const router = useRouter();
	//const [imageLoaded, setImageLoaded] = useState(false);
	//const [setGallery, setGalleryId] = useStore(
	//useShallow((state) => [state.setGallery, state.setGalleryId])
	//);
	//const { scrolledPosition, viewportHeight } = useScrollInfo();
	const isMobile = false; //useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const singleModel = product.models.length === 1;
	const pictureStyle = { paddingBottom: '4em' };
	/*
	const [list, setList] = useState({ specifications: false, downloads: false });
	const [pictureStyle, setPictureStyle] = useState({ paddingBottom: '4em' });
	const images = useMemo(
		() =>
			dedupeImages([
				product.image,
				...product.productGallery
					.map((block) => recordImages(block))
					.reduce((acc, curr) => acc.concat(curr), []),
			]),
		[product]
	);

	const handleGalleryClick = (type: string, id: string) => {
		setGallery({
			images: type === 'product' ? images : drawings,
			index: 0,
			padImagesWithTitle: true,
		});
		setGalleryId(id);
	};

	useEffect(() => {
		// Toggle specs/downloads on sidebar click

		const handleHashChange = (url: string) => {
			setList((l) => ({
				...l,
				specifications: url.endsWith('specifications') || l.specifications,
				downloads: url.endsWith('downloads') || l.downloads,
			}));
		};

		router.events.on('hashChangeStart', handleHashChange);
		return () => router.events.off('hashChangeStart', handleHashChange);
	}, [router.events]);

	useEffect(() => {
		setGallery({ images, padImagesWithTitle: true });
	}, [images, setGallery]);

	useEffect(() => {
		const scale = Math.max(0, (viewportHeight - scrolledPosition * 4) / viewportHeight);
		setPictureStyle({ paddingBottom: `${4 * scale}em` });
	}, [viewportHeight, scrolledPosition, setPictureStyle, isMobile]);
*/
	return (
		<>
			{/*<DatoSEO title={product.title} description={product.description} seo={product._seoMetaTags} />*/}
			<Section name='Introduction' className={s.product} top={true}>
				<div
					className={s.intro}
					//onClick={() => handleGalleryClick('product', product.image?.id)}
				>
					{product.image?.responsiveImage && (
						<Image
							pictureClassName={cn(
								s.image
								//imageLoaded && s.loaded
							)}
							data={product.image.responsiveImage}
							layout={'fill'}
							fadeInDuration={700}
							objectFit={'contain'}
							pictureStyle={!isMobile ? pictureStyle : undefined}
							placeholderStyle={!isMobile ? pictureStyle : undefined}
							//onLoad={() => setImageLoaded(true)}
						/>
					)}
					<div className={cn(s.overlay, s.show)}>
						<div className={s.text}>
							<h1 className={s.title}>
								<TextReveal>{product.title}</TextReveal>
							</h1>
							<h1 className={s.designer}>
								<TextReveal block={true}>
									by {formatDesignerName(product.designer?.name)}
								</TextReveal>
							</h1>
							<h3 className={s.type}>
								<TextReveal>
									{product.categories.map(({ name }, idx) => name).join(isMobile ? '\n' : ', ')}
								</TextReveal>
							</h3>
						</div>
						{product.upcycled && (
							<div className={s.upcycled}>
								<img src='/images/upcycled-logo.svg' />
							</div>
						)}
					</div>
				</div>
			</Section>
			<Section className={s.description}>
				<Markdown content={product.description} />
			</Section>
			<Section>
				{product.productGallery.map((block, idx) => (
					<Block
						key={idx}
						data={block}
						//onClick={(id) => handleGalleryClick('product', id)}
						first={idx === 0}
					/>
				))}
			</Section>
			{/*
			<SectionListItem
				title={'Specifications'}
				className={cn(s.listItemContent, s.top)}
				//selected={list.specifications === true}
				//onToggle={() => setList({ ...list, specifications: !list.specifications })}
				idx={0}
				total={2}
			>
				<ul className={s.specifications}>
					{specsCols.map(({ label, value, linebreaks, slug }, idx) => {
						const text = linebreaks
							? value.split('\n').map((el, idx) => (
									<React.Fragment key={idx}>
										{el}
										<br />
									</React.Fragment>
							  ))
							: value;
						return (
							<li key={idx} data-linebreaks={linebreaks}>
								<span>{label}</span>
								<span>
									{!slug ? (
										text
									) : (
										<Link href={slug} scroll={false}>
											{text}
										</Link>
									)}
								</span>
							</li>
						);
					})}
				</ul>
				<div className={s.articles}>
					<header>
						<span>Art no</span>
						<span>Model</span>
						<span>Art no</span>
						<span>Model</span>
					</header>
					<div className={cn(s.content, !singleModel && s.multi)}>
						{product.models.map(({ id, name, variants, lightsources, accessories }, midx) => {
							const art = variants.map((v) => ({
								articleNo: v.articleNo,
								label: [v.color?.name, v.material?.name, v.feature?.name]
									.filter((el) => el)
									.join(', '),
							}));

							const access = accessories
								.filter((el) => el.accessory)
								.map((a) => ({
									articleNo: a.articleNo,
									label: a.accessory.name,
								}));

							const light = lightsources
								.filter((el) => el.lightsource)
								.map((l) => ({
									articleNo: l.lightsource.articleNo,
									label: `${l.lightsource.name} (need ${l.amount})`,
									included: l.included,
									optional: l.optional,
									amount: l.amount,
								}));

							const cols = art.concat(access).concat(light);
							const rows = chunkArray(cols, 2);

							if (singleModel) {
								return rows.map((row, idx) => (
									<ul key={`${id}-${idx}`}>
										<li>
											<span>{row[0].articleNo}</span>
											<span>{row[0].label}</span>
											<span>{row[1]?.articleNo}</span>
											<span>{row[1]?.label}</span>
										</li>
									</ul>
								));
							}

							return (
								<ul key={id}>
									<li className={s.subheader}>
										<span></span>
										<span>
											{product.title} {name?.name}
										</span>
									</li>
									{rows.map((row, idx) => (
										<React.Fragment key={`${id}-${idx}`}>
											<li key={`${id}-${idx}-c1`}>
												<span>{row[0].articleNo}</span>
												<span>{row[0].label}</span>
											</li>
											<li key={`${id}-${idx}-c2`}>
												<span>{row[1]?.articleNo}</span>
												<span>{row[1]?.label}</span>
											</li>
										</React.Fragment>
									))}
								</ul>
							);
						})}
					</div>
				</div>

				<div className={s.dimensions}>
					<span>Dimensions</span>
					<button
						//onClick={() => handleGalleryClick('drawings', drawings[0].id)}
						disabled={drawings.length === 0}
					>
						{drawings.length ? (
							<>View drawing{drawings.length > 1 && 's'} + </>
						) : (
							<>No drawings available</>
						)}
					</button>
				</div>
			</SectionListItem>
			<SectionListItem
				title={'Downloads'}
				className={cn(s.listItemContent, s.bottom)}
				//selected={list.downloads === true}
				idx={1}
				total={2}
				//onToggle={() => setList({ ...list, downloads: !list.downloads })}
			>
				<ul className={s.downloads}>
					{files.map(({ href, type, label, download }, idx) => (
						<li key={idx}>
							<a href={href} target='_new'>
								<Icon type={type} label={label} disabled={!href} download={download} />
							</a>
						</li>
					))}
				</ul>
			</SectionListItem>
			*/}
			<Section name='Related' className={s.related} bgColor='--mid-gray' fadeColor={'#ffffff'}>
				{relatedProducts.length > 0 && (
					<FeaturedGallery
						headline={`Related products`}
						items={relatedProducts}
						theme={'light'}
						id='related'
						fadeColor={'--mid-gray'}
					/>
				)}
				{relatedProjects.length > 0 && (
					<FeaturedGallery
						headline={`Related projects`}
						items={relatedProjects}
						theme={'light'}
						id='relatedProjects'
						fadeColor={'--mid-gray'}
					/>
				)}
				{productsByCategory.length > 0 && (
					<FeaturedGallery
						headline={`Other ${product.categories[0].namePlural?.toLowerCase()}`}
						items={productsByCategory}
						theme={'light'}
						id='relatedbycategory'
						fadeColor={'--mid-gray'}
					/>
				)}
			</Section>
		</>
	);
}

Product.page = { layout: 'normal', color: '--white', menu: 'normal' } as PageProps;

const formatDesignerName = (name?: string) => {
	if (!name) return '';
	const words = name?.split(' ');
	const rows = [];

	for (let i = words.length - 1; i >= 0; i -= 2) {
		const row = [words[i]];
		if (i - 1 >= 0) row.push(words[i - 1]);
		rows.push(row);
	}
	return rows.reverse().map((el: string[], i) => (
		<React.Fragment key={i}>
			{el.reverse().join(' ')}
			{i < rows.length - 1 && <br />}
		</React.Fragment>
	));
};

export type ProductDataProps = {
	product: ProductRecord;
	relatedProducts: ProductRecord[];
	relatedProjects: ProjectRecord[];
	productsByCategory: ProductRecord[];
	images: FileField[];
	drawings: FileField[];
	specsCols: { label: string; value: string; linebreaks?: boolean; slug?: string }[];
	files: ProductDownload[];
};

const getProductPageData = async (slug: string): Promise<ProductDataProps | null> => {
	console.log(slug);
	const { product } = await apiQuery<ProductQuery, ProductQueryVariables>(ProductDocument, {
		variables: { slug },
	});

	if (!product) return null;

	const [{ relatedProducts }, { productsByCategory }, { relatedProjects }] = await Promise.all([
		apiQuery<RelatedProductsQuery, RelatedProductsQueryVariables>(RelatedProductsDocument, {
			variables: { designerId: product.designer?.id, familyId: product.family.id },
		}),
		apiQuery<AllProductsByCategoryQuery, AllProductsByCategoryQueryVariables>(
			AllProductsByCategoryDocument,
			{
				variables: { categoryId: product.categories[0]?.id },
			}
		),
		apiQuery<RelatedProjectsForProductQuery, RelatedProjectsForProductQueryVariables>(
			RelatedProjectsForProductDocument,
			{
				variables: { productId: product.id },
			}
		),
	]);

	const specs = parseSpecifications(product as any, 'en', null);
	const specsCols = [
		{ label: 'Designer', value: specs.designer, slug: `/designers/${product.designer?.slug}` },
		{ label: 'Mounting', value: specs.mounting },
		{ label: 'Electrical data', value: specs.electricalData },
		{ label: 'Socket', value: specs.socket },
		{ label: 'Connection', value: specs.connection },
		{ label: 'Lightsource', value: specs.lightsource },
		{ label: 'Additional info', value: specs.additionalInformation },
		{ label: 'Note', value: product.note, linebreaks: true },
	].filter((el) => el.value);

	const files = productDownloads(product as ProductRecordWithPdfFiles);
	const drawings = [];
	product.models.forEach(
		(m) => m.drawing && drawings.push({ ...m.drawing, title: m.name?.name || null })
	);

	const sort = {
		byFamily: (a: ProductRecord, b: ProductRecord) => (a.family.id === b.family.id ? 0 : 1),
		byTitle: (a: ProductRecord, b: ProductRecord) => (a.title > b.title ? 1 : -1),
		byCategory: (a: ProductRecord, b: ProductRecord) =>
			a.categories
				.map((el) => el.id)
				.find((id) => product.categories.map((el) => el.id).includes[id])
				? 1
				: -1,
		byDesigner: (a: ProductRecord, b: ProductRecord) =>
			a.designer.id === product.designer.id ? 1 : -1,
	};

	return {
		product,
		relatedProducts: relatedProducts
			.filter((p) => p.id !== product.id)
			.sort(firstBy(sort.byFamily).thenBy(sort.byTitle)),
		productsByCategory: productsByCategory
			.filter((p) => p.id !== product.id)
			.sort(firstBy(sort.byDesigner).thenBy(sort.byCategory)),
		relatedProjects,
		files,
		drawings,
		specsCols,
		pageTitle: product.title,
	};
};

export async function generateStaticParams() {
	const { allProducts } = await apiQuery<AllProductsLightQuery, AllProductsLightQueryVariables>(
		AllProductsLightDocument,
		{ all: true }
	);
	const paths = allProducts.map(({ slug }) => ({ slug }));
	return paths;
}
