import { AllProductsDocument, AllProductLightsourcesDocument, AllProductAccessoriesDocument } from '@/graphql';
import fs from 'fs';
//@ts-expect-error
import XlsxStreamReader from 'xlsx-stream-reader';
import 'dotenv/config';
import { apiQuery } from 'next-dato-utils/api';
import { buildClient, ApiError, buildBlockRecord } from '@datocms/cma-client';

const environment = 'main';
const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN as string, environment });

(async () => {
	console.time('delivery days');
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		environment,
		includeDrafts: true,
	});
	const { allProductLightsources } = await apiQuery(AllProductLightsourcesDocument, {
		all: true,
		environment,
	});
	const { allProductAccessories } = await apiQuery(AllProductAccessoriesDocument, {
		all: true,
		environment,
	});

	const variants = await readFile('./docs/Leveranstid per produkt.xlsx');
	variants.forEach((variant, idx) => {
		const product = allProducts.find((p) =>
			p.models.some((m) =>
				m.variants.find((v) => {
					return v.articleNo?.trim() === variant.articleNo;
				})
			)
		);
		const accessory = allProductAccessories.find((p) => p.articleNo.trim() === variant.articleNo);
		const lightsources = allProductLightsources.find((p) => p.articleNo.trim() === variant.articleNo);
		variants[idx].item = product || accessory || lightsources;
	});
	try {
		const missing: any[] = [];
		for (const variant of variants) {
			if (!variant.item) {
				missing.push(variant);
				continue;
			}
			const item: any = await client.items.find(variant.item.id, { nested: true });
			let data: any = null;

			switch (variant.item.__typename) {
				case 'ProductAccessoryRecord':
					data = { delivery_days: variant.days };
					break;
				case 'ProductLightsourceRecord':
					data = { delivery_days: variant.days };
					break;
				case 'ProductRecord':
					data = {
						...item.attributes,
						models: item.models.map((m: any) => ({
							...m,
							attributes: {
								...m.attributes,
								variants: m.attributes.variants?.map((v: any) => ({
									...v,
									attributes: {
										...v.attributes,
										delivery_days:
											v.attributes.article_no === variant.articleNo ? variant.days : v.attributes.delivery_days,
									},
								})),
							},
						})),
					};

					break;
			}
			console.log(`${variant.item.__typename}: ${variant.articleNo}`);
			await client.items.update(item.id, data);
			if (item.meta.status === 'published') await client.items.publish(item.id);
		}
		console.log('Missing', missing);
	} catch (err) {
		const e = err as ApiError;
		console.log(e.message, e.cause);
	}
	console.timeEnd('delivery days');
})();

async function readFile(
	filePath: string
): Promise<{ articleNo: string; days: 'short' | 'medium' | 'long'; item?: any }[]> {
	const variants: { articleNo: string; days: 'short' | 'medium' | 'long' }[] = [];
	return new Promise((resolve, reject) => {
		var workBookReader = new XlsxStreamReader();
		workBookReader.on('error', (err: any) => reject(err));
		workBookReader.on('worksheet', (workSheetReader: any) => {
			if (workSheetReader.id > 1) return workSheetReader.skip(); // we only want first sheet

			workSheetReader.on('row', (row: any) => {
				if (!row.values[2] || !row.values[4]) return;
				const days = parseInt(row.values[4]) === 5 ? 'short' : parseInt(row.values[4]) === 30 ? 'medium' : 'long';
				variants.push({
					articleNo: String(row.values[2]).trim(),
					days,
				});
			});

			workSheetReader.on('end', function () {
				resolve(variants);
			});
			workSheetReader.process();
		});

		fs.createReadStream(filePath).pipe(workBookReader);
	});
}
