// import { AllProductsDocument, ProductsDocument } from '@/graphql';
// import {
// 	convertPriceWithRatesAndTaxes,
// 	sortProductsByCategory,
// 	toLanguageLocale,
// } from '@/catalogue/lib/utils';
// import { apiQuery } from 'next-dato-utils/api';
// import type { NextRequest, NextResponse } from 'next/server';
// import { format } from 'date-fns';

// export const runtime = 'edge';

// export default async function handler(req: NextRequest, res: NextResponse) {
// 	try {
// 		const searchParams = new URL(req.url).searchParams;
// 		const locale = searchParams.get('locale');
// 		const hideIncluded = true; //searchParams.get('hideincluded');
// 		if (!locale) throw new Error('Locale not found');

// 		const { allProducts } = await apiQuery(AllProductsDocument, {
// 			all: true,
// 			variables: { locale: toLanguageLocale(locale) },
// 		});

// 		const rows: string[][] = [];

// 		for (const product of allProducts) {
// 			if (product.hideInPricelist) continue;
// 			rows.push([
// 				'',
// 				`${product.family.name.trim()}${product.categories.length > 0 ? ` - ${product.categories.map((c) => c.name.trim()).join(' · ')}` : ''}`,
// 				'',
// 			]);

// 			for (const model of product.models) {
// 				model.name?.name && rows.push(['', `="${model.name.name.trim()}"`, '']);
// 				for (const variant of model.variants) {
// 					rows.push([
// 						`="${variant.articleNo}"`,
// 						[variant.color?.name, variant.material?.name, variant.feature?.name]
// 							.filter(Boolean)
// 							.join(', '),
// 						convertPriceWithRatesAndTaxes(variant.price, locale).toFixed(0),
// 					]);
// 				}
// 				for (const lightsources of model.lightsources) {
// 					const { lightsource, optional, included } = lightsources;
// 					const includedWithoutPrice = hideIncluded && included;

// 					if (!included) {
// 						rows.push([
// 							`="${lightsource?.articleNo}"`,
// 							`${lightsource?.name}${includedWithoutPrice ? ` (included)` : ''}`,
// 							includedWithoutPrice ? '' : convertPriceAmount(lightsource?.price, locale).toFixed(0),
// 						]);
// 					}
// 				}
// 				for (const accessories of model.accessories)
// 					rows.push([
// 						`="${accessories.accessory?.articleNo}"`,
// 						accessories.accessory?.name,
// 						convertPriceAmount(accessories.accessory?.price, locale).toFixed(0),
// 					]);
// 				rows.push(['', '', '']);
// 			}
// 		}

// 		const csv = rows.map((r) => r.map((r) => r.trim()).join(';')).join('\n');
// 		const buf = '\ufeff' + csv;
// 		const date = format(new Date(), 'yyyy-MM-dd');
// 		const filename = `Örsjo prislista - ${date} - ${locale.toUpperCase()}.csv`;
// 		return new Response(buf, {
// 			status: 200,
// 			headers: {
// 				'content-type': 'text/csv',
// 				'content-encoding': 'utf-8',
// 				'Content-Disposition': `attachment; filename="${filename}"`,
// 			},
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		return new Response(JSON.stringify(err), {
// 			status: 500,
// 			headers: { 'content-type': 'application/json' },
// 		});
// 	}
// }
