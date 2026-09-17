import {
	AllProductsDocument,
	AllProductLightsourcesDocument,
	AllProductAccessoriesDocument,
} from '@/graphql';
import fs from 'fs';
//@ts-expect-error
import XlsxStreamReader from 'xlsx-stream-reader';
import 'dotenv/config';
import { apiQuery } from 'next-dato-utils/api';
import { buildClient, ApiError } from '@datocms/cma-client';
import { ProductAccessory, ProductLightsource, ProductVariant } from '@/types/datocms-cma';

const ENV = 'dev';
const XLSX_PATH = './docs/Leveranstid per produkt.xlsx';
const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN as string, environment: ENV });

type DeliveryDays = 'short' | 'medium' | 'long';

(async () => {
	console.time('delivery days');
	const allProducts: AllProductsQuery['allProducts'] = (
		await apiQuery(AllProductsDocument, { all: true, includeDrafts: true })
	).allProducts;
	const allProductLightsources: AllProductLightsourcesQuery['allProductLightsources'] = (
		await apiQuery(AllProductLightsourcesDocument, { all: true, includeDrafts: true })
	).allProductLightsources;
	const allProductAccessories: AllProductAccessoriesQuery['allProductAccessories'] = (
		await apiQuery(AllProductAccessoriesDocument, { all: true, includeDrafts: true })
	).allProductAccessories;

	const rows = await readFile(XLSX_PATH);
	const missing: string[] = [];

	for (const row of rows) {
		const variant = allProducts
			.flatMap((p) => p.models)
			.flatMap((m) => m.variants)
			.find((v) => v.articleNo?.trim() === row.articleNo);
		const accessory = allProductAccessories.find((a) => a.articleNo.trim() === row.articleNo);
		const lightsource = allProductLightsources.find((l) => l.articleNo.trim() === row.articleNo);

		try {
			if (variant) {
				await client.items.update<ProductVariant>(variant.id, { delivery_days: row.days });
				await republishIfPublished(variant.id);
				console.log(`product_variant: ${row.articleNo} → ${row.days}`);
			} else if (accessory) {
				await client.items.update<ProductAccessory>(accessory.id, { delivery_days: row.days });
				await republishIfPublished(accessory.id);
				console.log(`product_accessory: ${row.articleNo} → ${row.days}`);
			} else if (lightsource) {
				await client.items.update<ProductLightsource>(lightsource.id, { delivery_days: row.days });
				await republishIfPublished(lightsource.id);
				console.log(`product_lightsource: ${row.articleNo} → ${row.days}`);
			} else {
				missing.push(row.articleNo);
			}
		} catch (err) {
			const e = err as ApiError;
			console.error(`! ${row.articleNo}:`, e.message ?? err);
			missing.push(row.articleNo);
		}
	}

	console.log('Missing', missing);
	console.timeEnd('delivery days');
})();

async function republishIfPublished(id: string): Promise<void> {
	try {
		const item = await client.items.find(id, { version: 'published' });
		if (item) await client.items.publish(id);
	} catch (err) {
		if (!(err instanceof ApiError)) throw err;
	}
}

async function readFile(filePath: string): Promise<{ articleNo: string; days: DeliveryDays }[]> {
	const variants: { articleNo: string; days: DeliveryDays }[] = [];
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