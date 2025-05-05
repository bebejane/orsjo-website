import s from './[designer].module.scss';
import withGlobalProps from '@/lib/withGlobalProps';
import {
	AllDesignersDocument,
	DesignerDocument,
	AllProductsByDesignerDocument,
	AllProductsLightDocument,
} from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DatoSEO } from 'next-dato-utils/components';
import { Image } from 'react-datocms';
import { PageProps } from '@/lib/context/page';
import { ProductThumbnail, Section, FeaturedGallery, TextReveal } from '@/components';

export type DesignerProps = {
	designer: DesignerRecord;
	products: ProductRecord[];
	designers: DesignerRecord[];
};

export default function Designer({ designer, products, designers }: DesignerProps) {
	return (
		<>
			<DatoSEO
				title={designer.name}
				description={designer.description}
				seo={designer._seoMetaTags}
			/>
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
						{designer.image && (
							<Image
								data={designer.image.responsiveImage}
								layout={'fill'}
								objectFit={'cover'}
								priority={true}
							/>
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
								<ProductThumbnail key={idx} product={p} theme='light' />
							</li>
						))}
					</ul>
				</div>
			</Section>
			<Section type='margin' className={s.otherDesigners} bgColor='--green'>
				<h1>Other designers</h1>
				<div className={s.gallery}>
					<FeaturedGallery
						items={designers}
						id='all-designers'
						theme='light'
						arrowAlign='middle'
						fadeColor={'--green'}
					/>
				</div>
			</Section>
		</>
	);
}

Designer.page = { layout: 'full', color: '--green', menu: 'inverted' } as PageProps;

export async function getStaticPaths(context) {
	const { designers } = await apiQuery(AllDesignersDocument);
	const paths = designers.map(({ slug }) => ({ params: { designer: slug } }));
	return {
		paths,
		fallback: 'blocking',
	};
}

export const getStaticProps = withGlobalProps(
	{ queries: [AllDesignersDocument, AllProductsLightDocument] },
	async ({ props, context, revalidate }) => {
		const { designers, products: allProducts } = props;
		const { designer } = await apiQuery(DesignerDocument, {
			variables: { slug: context.params.designer },
			preview: context.preview,
		});

		if (!designer) return { notFound: true, revalidate };

		const { products } = await apiQuery(AllProductsByDesignerDocument, {
			variables: { id: designer.id },
			preview: context.preview,
		});

		return {
			props: {
				...props,
				designer,
				designers: designers
					.filter(({ id }) =>
						allProducts.find((p) => p.designer?.id === id && p.designer?.id !== designer.id)
					)
					.sort(() => (Math.random() > 0.5 ? 1 : -1)),
				products,
				pageTitle: designer.name,
			},
			revalidate,
		};
	}
);
