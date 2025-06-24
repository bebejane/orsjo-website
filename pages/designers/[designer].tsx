import styles from './[designer].module.scss';
import withGlobalProps from '/lib/withGlobalProps';
import {
	AllDesignersDocument,
	DesignerDocument,
	AllProductsByDesignerDocument,
	AllProductsLightDocument,
} from '/graphql';
import { apiQuery } from 'dato-nextjs-utils/api';
import { DatoSEO } from 'dato-nextjs-utils/components';
import { Image } from 'react-datocms';
import { PageProps } from '/lib/context/page';
import { ProductThumbnail, Section, FeaturedGallery, TextReveal } from '/components';

export type DesignerProps = {
	designer: DesignerRecord;
	productsByDesigner: ProductRecord[];
	allDesigners: DesignerRecord[];
};

export default function Designer({ designer, productsByDesigner, allDesigners }: DesignerProps) {
	return (
		<>
			<DatoSEO title={designer.name} description={designer.description} seo={designer._seoMetaTags} />
			<Section type='full' className={styles.designer}>
				<header>
					<div className={styles.artist} key={designer.id}>
						<h1>
							<TextReveal block={true}>{designer.name}</TextReveal>
						</h1>
						<p className='large'>{designer.description}</p>
					</div>
					<figure>
						<div className={styles.fade}></div>
						{designer.image && (
							<Image data={designer.image.responsiveImage} layout={'fill'} objectFit={'cover'} priority={true} />
						)}
						<figcaption>
							<h1>{designer.name}</h1>
						</figcaption>
					</figure>
				</header>
			</Section>
			<Section type='margin' className={styles.products} bgColor='--mid-gray'>
				<h1>
					Products by <br />
					{designer.name}
				</h1>
				<div className={styles.gallery}>
					<ul>
						{productsByDesigner.map((p, idx) => (
							<li key={idx}>
								<ProductThumbnail key={idx} product={p} theme='light' />
							</li>
						))}
					</ul>
				</div>
			</Section>
			<Section type='margin' className={styles.otherDesigners} bgColor='--green'>
				<h1>Other designers</h1>
				<div className={styles.gallery}>
					<FeaturedGallery
						items={allDesigners}
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
	const { allDesigners } = await apiQuery(AllDesignersDocument);
	const paths = allDesigners.map(({ slug }) => ({ params: { designer: slug } }));
	return {
		paths,
		fallback: 'blocking',
	};
}

export const getStaticProps = withGlobalProps(
	{ queries: [AllDesignersDocument, AllProductsLightDocument] },
	async ({ props, context, revalidate }) => {
		const { allDesigners, allProducts } = props;
		const { designer } = await apiQuery(DesignerDocument, {
			variables: { slug: context.params.designer },
			preview: context.preview,
		});

		if (!designer) return { notFound: true, revalidate };

		const { allProducts: productsByDesigner } = await apiQuery(AllProductsByDesignerDocument, {
			variables: { id: designer.id },
			preview: context.preview,
		});

		return {
			props: {
				...props,
				designer,
				allDesigners: allDesigners
					.filter(({ id }) => allProducts.find((p) => p.designer?.id === id && p.designer?.id !== designer.id))
					.sort(() => (Math.random() > 0.5 ? 1 : -1)),
				productsByDesigner,
				pageTitle: designer.name,
			},
			revalidate,
		};
	}
);
