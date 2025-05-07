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
import { notFound } from 'next/navigation';

export type Props = {
	params: Promise<{
		designer: string;
	}>;
};

export default async function Designer({ params }: Props) {
	const { designer: slug } = await params;

	const { designer } = await apiQuery<DesignerQuery, DesignerQueryVariables>(DesignerDocument, {
		variables: { slug },
	});

	if (!designer) return notFound();

	const [{ allProducts }, { allProducts: products }, { allDesigners }] = await Promise.all([
		apiQuery<AllProductsLightQuery, AllProductsLightQueryVariables>(AllProductsLightDocument, {
			all: true,
		}),
		apiQuery<AllProductsByDesignerQuery, AllProductsByDesignerQueryVariables>(
			AllProductsByDesignerDocument,
			{
				variables: { id: designer.id },
				all: true,
			}
		),
		apiQuery<AllDesignersQuery, AllDesignersQueryVariables>(AllDesignersDocument, { all: true }),
	]);

	const designers = allDesigners
		.filter(({ id }) =>
			allProducts.find((p) => p.designer?.id === id && p.designer?.id !== designer.id)
		)
		.sort(() => (Math.random() > 0.5 ? 1 : -1));

	return (
		<>
			<Section type='full' className={s.designer}>
				<header>
					<div className={s.artist} key={designer.id}>
						<h1>
							<TextReveal block={true}>{designer.name}</TextReveal>
						</h1>
						<p className='large'>{designer.description}</p>
					</div>
					<figure>
						<div className={s.fade}></div>
						{designer.image?.responsiveImage && (
							<Image data={designer.image.responsiveImage} priority={true} />
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
		</>
	);
}

export async function generateStaticParams() {
	const { allDesigners } = await apiQuery<AllDesignersQuery, AllDesignersQueryVariables>(
		AllDesignersDocument,
		{ all: true }
	);
	const paths = allDesigners.map(({ slug: designer }) => ({ designer }));
	return paths;
}
