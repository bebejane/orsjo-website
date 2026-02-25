import {
	ProductDocument,
	AllRelatedProductsDocument,
	AllProductsByCategoryDocument,
	AllRelatedProjectsForProductDocument,
	ShippingDocument,
} from '@/graphql';
import {
	parseSpecifications,
	ProductDownload,
	productDownloads,
	ProductRecordWithPdfFiles,
} from '@/lib/utils';
import { apiQuery } from 'next-dato-utils/api';
import { firstBy } from 'thenby';
import * as geins from '@/geins/merchant-api';

export type SpecCol = {
	label: string;
	value: string;
	linebreaks?: boolean;
	slug?: string;
};

export type ProductPageDataProps = {
	geins: {
		products: ProductType[];
		accessories: ProductType[];
		lightsources: ProductType[];
		i18n: {
			countryCode: CountryCode;
			currencyCode: CurrencyCode;
		};
	};
	product: ProductQuery['product'];
	relatedProducts: AllRelatedProductsQuery['allProducts'];
	relatedProjects: AllRelatedProjectsForProductQuery['allProjects'];
	productsByCategory: AllProductsByCategoryQuery['allProducts'];
	drawings: FileField[];
	specsCols: SpecCol[];
	files: ProductDownload[];
	shipping: ShippingQuery['shipping'];
};

export const getProductPageData = async (
	slug: string,
	countryCode: CountryCode,
): Promise<ProductPageDataProps | null> => {
	const { product } = await apiQuery(ProductDocument, {
		variables: { slug },
	});

	if (!product) return null;

	const [{ allProducts }, { allProducts: allProductCategories }, { allProjects }, { shipping }] =
		await Promise.all([
			apiQuery(AllRelatedProductsDocument, {
				all: true,
				variables: { designerId: product.designer?.id, familyId: product.family.id },
				tags: ['shipping', 'accessory', 'lightsource'],
			}),
			apiQuery(AllProductsByCategoryDocument, {
				variables: { categoryId: product.categories[0]?.id },
				tags: ['shipping', 'accessory', 'lightsource'],
				all: true,
			}),
			apiQuery(AllRelatedProjectsForProductDocument, {
				all: true,
				variables: { productId: product.id },
			}),
			apiQuery(ShippingDocument),
		]);

	const products = await geins.getProductsByCategory(slug);
	const accessories = await geins.getProductsByCategory('accessory');
	const lightsources = await geins.getProductsByCategory('lightsource');

	const articleNumbers = product.models
		.map((m) => [
			...m.accessories.map((a) => a.accessory?.articleNo),
			...m.lightsources.map((l) => l.lightsource.articleNo),
		])
		.flat()
		.filter(Boolean) as string[];

	const geinsLightsources = lightsources.filter(
		(a) => a.articleNumber && articleNumbers.includes(a.articleNumber),
	);
	const geinsAccessories = accessories.filter(
		(a) => a.articleNumber && articleNumbers.includes(a.articleNumber),
	);

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
	].filter((el) => el.value) as SpecCol[];

	const files = productDownloads(product as ProductRecordWithPdfFiles);
	const drawings: FileField[] = [];

	product.models.forEach(
		(m) => m.drawing && drawings.push({ ...m.drawing, title: m.name?.name || null } as FileField),
	);

	const sort = {
		byFamily: (a: ProductRecord, b: ProductRecord) => (a.family.id === b.family.id ? 0 : 1),
		byTitle: (a: ProductRecord, b: ProductRecord) => (a.title > b.title ? 1 : -1),
		byCategory: (a: ProductRecord, b: ProductRecord) =>
			a.categories
				.map((el) => el.id)
				.find((id: string) => product?.categories?.map((el) => el.id).includes(id))
				? 1
				: -1,
		byDesigner: (a: ProductRecord, b: ProductRecord) =>
			a.designer?.id === product.designer?.id ? 1 : -1,
	};

	const currencyCode = 'SEK' as CurrencyCode;

	return {
		product,
		geins: {
			products: products,
			accessories: geinsAccessories,
			lightsources: geinsLightsources,
			i18n: {
				countryCode,
				currencyCode,
			},
		},
		relatedProducts: allProducts
			.filter((p) => p.id !== product.id)
			//@ts-ignore
			.sort(firstBy(sort.byFamily).thenBy(sort.byTitle)),
		productsByCategory: allProductCategories
			.filter((p) => p.id !== product.id)
			//@ts-ignore
			.sort(firstBy(sort.byDesigner).thenBy(sort.byCategory)),
		relatedProjects: allProjects,
		files,
		drawings,
		specsCols,
		shipping,
	};
};
