import { buildClient } from '@datocms/cma-client-browser';
import { apiQuery } from 'next-dato-utils/api';
import { SiteSearchDocument, CurrencyDocument, AllCurrenciesDocument } from '@/graphql';

const scssExports = {
	'navbarHeight': '4rem',
	'navbarHeightMobile': '60px',
	'margin': '3rem',
	'smallMargin': '2rem',
	'mobile': '320px',
	'tablet': '740px',
	'desktop': '980px',
	'wide': '1441px',
	'nav-break': '1200px',
};
export const isServer = typeof window === 'undefined';
export const sleep = (ms: number) => new Promise((resolve, refject) => setTimeout(resolve, ms));

type Locale = 'en' | 'sv' | 'no' | 'dk' | 'en-GB';

export type CurrencyRate = {
	isoCode: string;
	symbol: string;
	rate: number;
	rateDeduction: number;
	surcharge: number;
	vatRate: number;
};

export const getAllCurrencyRates = async (): Promise<CurrencyRate[]> => {
	const { currency } = await apiQuery(AllCurrenciesDocument, {
		revalidate: 60,
	});

	if (!currency) throw new Error('Currency not found');

	const currencies: CurrencyRate[] = [];

	for (const { value, locale } of currency.isoCode ?? []) {
		currencies.push({
			isoCode: value ?? '',
			symbol: currency.symbol?.find(({ locale: l }) => l === locale)?.value ?? '',
			rate: currency.rate?.find(({ locale: l }) => l === locale)?.value ?? 0,
			rateDeduction: currency.rateDeduction?.find(({ locale: l }) => l === locale)?.value ?? 0,
			surcharge: currency.surcharge?.find(({ locale: l }) => l === locale)?.value ?? 0,
			vatRate: currency.vatRate?.find(({ locale: l }) => l === locale)?.value ?? 0,
		});
	}

	return currencies;
};

export const getCurrencyRateByISO = async (currencyCode: CurrencyCode): Promise<CurrencyRate> => {
	const allCurrencies = await getAllCurrencyRates();
	const currency = allCurrencies.find((c) => c.isoCode === currencyCode);
	if (!currency) throw new Error(`Currency ${currencyCode} not found`);
	return currency as CurrencyRate;
};

export const getCurrencyRateByLocale = async (locale: SiteLocale): Promise<CurrencyRate> => {
	const { currency } = await apiQuery(CurrencyDocument, {
		revalidate: 60,
		variables: { locale },
	});

	if (!currency) throw new Error('Currency not found');
	return currency as CurrencyRate;
};

export const getPriceWithRatesAndTaxes = async (
	price: number,
	currencyCode: CurrencyCode,
): Promise<number> => {
	const c = await getCurrencyRateByISO(currencyCode);
	return convertPriceWithRatesAndTaxes(price, c);
};

export const convertPriceWithRatesAndTaxes = (price: number, c: CurrencyRate) => {
	return Math.ceil(((price * c.surcharge) / (c.rate * c.rateDeduction)) * (1 + c.vatRate));
};

export const formatPrice = async (price: number, locale: SiteLocale) => {
	const c = await getCurrencyRateByLocale(locale);
	const nf = new Intl.NumberFormat(
		`${!locale.includes('-') ? `${locale}-${locale.toUpperCase()}` : locale}`,
	);
	return `${nf.format(Math.ceil(price))} ${c.symbol}`;
};

export const sortProductsByCategory = (products: ProductRecord[]) => {
	const sortedProducts = [...products].sort((a, b) => {
		if (a.family?.id === b.family?.id)
			return a.categories[0].position < b.categories[0].position ? -1 : 1;
		else return 0;
	});
	return sortedProducts;
};

export const sectionId = (title?: string | null, id?: string) => {
	if (!title) return {};
	id = id
		? id
		: title
				.replace(/\s/g, '')
				.replace(/[^\w\s]/gi, '')
				.toLowerCase();
	return {
		id,
		'data-section-id': id,
		'data-section-title': title,
	};
};

export const chunkArray = (array: any[], chunkSize: number) => {
	const newArr: any[] = [];
	for (let i = 0; i < array.length; i += chunkSize) newArr.push(array.slice(i, i + chunkSize));
	return newArr;
};

export const parseSpecifications = (product: ProductRecord, locale: Locale, t: any) => {
	type LightsourcePick = {
		id: string;
		amount?: number;
		name: string;
		included: boolean;
		modelName: string;
	};

	let allLightsources: (LightsourceRecord & { modelName: string })[] = [];

	product.models
		.map((m) => m.lightsources.map((l) => ({ ...l, modelName: m.name?.name as string })))
		.forEach((l) => allLightsources.push.apply(allLightsources, l));

	let lightsources = allLightsources
		.filter((obj, index, arr) => arr.map((mapObj) => mapObj.id).indexOf(obj.id) === index)
		.filter(({ lightsource }) => lightsource !== undefined && lightsource !== null)
		.map(({ amount, included, lightsource, modelName }) => ({
			included,
			amount: amount || 1,
			name: lightsource?.name,
			modelName,
			id: lightsource?.id,
		})) as LightsourcePick[];

	const specs = {
		designer: product.designer?.name,
		electricalData: product.electricalData.map((el) => el.name).join(', '),
		additionalInformation: product.additionalInformation
			? product.additionalInformation +
				(product.dimmable?.name ? `. ${product.dimmable?.name}` : '')
			: undefined,
		dimmable: product.dimmable?.name,
		connection: product.connection?.name,
		mounting: product.mounting?.name,
		lightsource: lightsources
			.map(
				({ included, name, modelName }) =>
					`${lightsources.length && product.models.length > 1 && modelName ? `${modelName}: ` : ''}${name} ${included ? `(${t ? t('included') : 'included'})` : ''}`,
			)
			.join(', '),
		socket: product.sockets.map((el) => el.name).join(', '),
		weight:
			product.models.length && product.models?.[0].variants?.[0]?.weight
				? `${product.models?.[0].variants?.[0]?.weight} kg`
				: undefined,
		volume:
			product.models.length && product.models?.[0].variants?.[0]?.volume
				? `${product.models?.[0].variants?.[0]?.volume} m³`
				: undefined,
		care: null,
		recycling: null,
	};

	return specs;
};

export const recordImages = (
	obj: any,
	exclude: string[] = [],
	images: FileField[] = [],
): FileField[] => {
	Object.keys(obj).forEach((key) => {
		if (
			obj[key]?.responsiveImage !== undefined &&
			!obj[key]?.mimeType.includes('video') &&
			!exclude.includes(key)
		)
			images.push({ ...obj[key], _key: key });

		if (typeof obj[key] === 'object' && obj[key] !== null) recordImages(obj[key], exclude, images);
	});

	return dedupeImages(images);
};

export const dedupeImages = (images: FileField[]): FileField[] => {
	return images.reduce<FileField[]>((unique, o) => {
		if (!unique.some((obj: FileField) => obj.id === o.id)) unique.push(o);
		return unique;
	}, []);
};

export const siteSearch = async (q: string | undefined | null) => {
	if (!q) return {};

	const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_SITESEARCH_API_TOKEN as string });
	const itemTypes = await client.itemTypes.list();
	const search = (
		await client.items.list({
			filter: {
				type: itemTypes.map((m) => m.api_key).join(','),
				query: q,
			},
			locale: 'en',
			order_by: '_rank_DESC',
		})
	).map((el) => ({
		...el,
		_api_key: itemTypes.find((t) => t.id === el.item_type.id)?.api_key,
	}));

	const data = await apiQuery(SiteSearchDocument, {
		variables: {
			productIds: search.filter((el) => el._api_key === 'product').map((el) => el.id),
			designerIds: search.filter((el) => el._api_key === 'designer').map((el) => el.id),
			projectIds: search.filter((el) => el._api_key === 'project').map((el) => el.id),
			newsIds: search.filter((el) => el._api_key === 'news').map((el) => el.id),
			faqIds: search.filter((el) => el._api_key === 'faq').map((el) => el.id),
			staffIds: search.filter((el) => el._api_key === 'staff').map((el) => el.id),
		},
	});

	Object.keys(data).forEach((type) => {
		if (!data?.[type as keyof typeof data]?.length) delete data[type as keyof typeof data];
	});

	return data;
};

export type ProductDownload = {
	href: string;
	label: string;
	type: string;
	download: boolean;
};

export type ProductRecordWithPdfFiles = ProductRecord & {
	pdfFiles: FileFieldMultiLocaleField[];
};

export const productDownloads = (product: ProductRecordWithPdfFiles): ProductDownload[] => {
	const { pdfFiles, mountingInstructions, bimLink, bimFile, lightFile } = product;

	const files = [
		{
			href:
				pdfFiles.find(({ locale }) => locale === 'sv') &&
				`${pdfFiles.find(({ locale }) => locale === 'sv')?.value?.url}`,
			label: 'Productsheet (SE)',
			type: 'pdf',
			download: true,
		},
		{
			href:
				pdfFiles.find(({ locale }) => locale === 'en') &&
				`${pdfFiles.find(({ locale }) => locale === 'en')?.value?.url}`,
			label: 'Productsheet (EN)',
			type: 'pdf',
			download: true,
		},
		{
			href: mountingInstructions?.url,
			label: 'Mounting instructions',
			type: 'pdf',
			download: true,
		},
		{
			href: lightFile?.url,
			label: 'Light file',
			type: 'zip',
			download: true,
		},
		{
			href: bimLink,
			label: 'Download at BIM Objects',
			type: 'cad',
			download: false,
		},
		{
			href: bimFile?.url,
			label: 'Download CAD files',
			type: 'cad',
			download: true,
		},
		{
			href: undefined,
			label: 'CAD file, size S',
			type: 'cad',
			download: true,
		},
	];

	return files.filter(({ href }) => href) as ProductDownload[];
};

export const truncateParagraph = (s: string, sentances: number = 1, ellipsis: boolean = true) => {
	if (!s || s.indexOf('.') === -1) return s;

	let str = s.split('.').slice(0, sentances).join('. ');
	return ellipsis ? str + '...' : str + '.';
};

export const remToPx = (rem: string | number): number => {
	if (isServer) return 0;
	return (
		(typeof rem === 'string' ? parseFloat(rem.replace('rem', '')) : rem) *
		parseFloat(getComputedStyle(document.documentElement).fontSize)
	);
};

export const pxToInt = (px: string): number => {
	return parseInt(px.replace('px', ''));
};

export const styleVariables: { [key: string]: number | string } = Object.keys(scssExports).reduce(
	(acc, key) => ({ ...acc, [key]: scssExports[key as keyof typeof scssExports] }),
	{} as { [key: string]: number | string },
);

export const waitForElement = async (id: string, ms: number): Promise<HTMLElement | null> => {
	let el: HTMLElement | null = null;
	for (let i = 0; i < ms; i += 50) {
		el = document.getElementById(id);
		if (el) break;
		await sleep(50);
	}
	return el;
};

export const scrollToId = (id: string, behavior: ScrollBehavior = 'smooth') => {
	const el = window.document.getElementById(id);
	const { tablet, navbarHeightMobile, navbarHeight } = styleVariables;
	const topMargin = 0; //(window.innerWidth < tablet ? navbarHeightMobile : navbarHeight) as number
	const top = el ? el.getBoundingClientRect().top + window.scrollY - topMargin : 0;
	window.scrollTo({ top, behavior });
};

export const pathnameToColor = (pathname: string) => {
	if (pathname.startsWith('/products')) return '--white';
	if (pathname.startsWith('/designers')) return '--green';
	if (pathname.startsWith('/professionals')) return '--gray';
	if (pathname.startsWith('/about')) return '--black';
	if (pathname.startsWith('/contact')) return '--beige';
	if (pathname.startsWith('/support')) return '--copper';
	if (pathname === '/') return '--black';
};

export const batchPromises = async (
	tasks: any[],
	concurrency: number,
	timeout?: number,
	callback?: (index: number) => void,
) => {
	const results: any[] = [];
	const executing = new Set();

	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];
		const promise = Promise.resolve()
			.then(() => task())
			.finally(() => callback?.(i));

		results.push(promise);
		executing.add(promise);

		const clean = () => executing.delete(promise);
		promise.then(clean).catch(clean);

		if (executing.size >= concurrency) {
			await Promise.race(executing);
			if (timeout) await new Promise((resolve) => setTimeout(resolve, timeout));
		}
	}

	return Promise.all(results);
};

export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

export function dedupeByKey<T>(array: T[], key: string) {
	return array.reduce((acc, item) => {
		const existingItem = acc.find((i) => i[key as keyof T] === item[key as keyof T]);
		if (!existingItem) {
			acc.push(item);
		}
		return acc;
	}, [] as T[]);
}

export const formatProductColor = (color?: string | null | undefined) => {
	if (color?.includes('structure RAL')) return color.substring(0, color.indexOf('structure RAL'));
	return color ?? '';
};

export const parseProductModelName = (model?: ProductModelRecord, variant?: VariantRecord) => {
	if (!model || !variant) return {};
	const name =
		model.name?.name ?? (formatProductColor(variant.color?.name) || variant.material?.name);
	const description = [
		model.name?.name ? formatProductColor(variant?.color?.name) : null,
		model.name?.name || variant?.color?.name ? variant?.material?.name : null,
		variant?.feature?.name,
	]
		.filter(Boolean)
		.join(', ')
		.replace(/\s+RAL\s+\d+\s+structure$/i, '')
		.replace(/\s+RAL\s+\d+$/i, '')
		.replace(/\s+structure$/i, '')
		.trim();

	return { name, description };
};

export const generateProductTitle = (product: ProductRecord, variantId: string): string => {
	const model = product.models.find(({ variants }) => variants.find((v) => v.id === variantId));
	const variant = model?.variants.find(({ id }) => id === variantId);
	const title =
		[model?.name?.name, variant?.color?.name, variant?.material?.name, variant?.feature?.name]
			.filter(Boolean)
			.join(' - ') ?? variant?.articleNo?.trim();
	return title || 'No title';
};

export const deliveryDaysText: Record<string, { full: string; label: string }> = {
	short: {
		full: 'In stock, ships within 3-5 days',
		label: '3-5 days',
	},
	medium: {
		full: 'Delivery within 6 weeks',
		label: '6 weeks',
	},
	long: {
		full: 'Delivery within 12 weeks',
		label: '12 weeks',
	},
};

export const pathnameToCountry = (pathname: string): string => {
	if (pathname === '/') return 'se';
	return pathname.split('/')[1].toLowerCase();
};
