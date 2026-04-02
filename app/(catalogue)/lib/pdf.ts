import { Page } from 'puppeteer-core';
import { getBrowser } from './puppeteer';
import client from '@/lib/client';

export async function generate(url: string): Promise<Uint8Array<ArrayBuffer>> {
	let page: Page | null = null;

	try {
		const browser = await getBrowser();
		page = await browser.newPage();

		await page.authenticate({
			username: process.env.BASIC_AUTH_USER!,
			password: process.env.BASIC_AUTH_PASSWORD!,
		});

		console.log('generate pdf from: ', url);
		const res = await page.goto(url, { timeout: 60 * 1000, waitUntil: 'networkidle0' });

		if (res?.status() !== 200)
			throw new Error(`Internal server error. HTTP status: ${res?.status()}`);

		const buffer = await page.pdf({
			format: 'A4',
			printBackground: true,
			preferCSSPageSize: true,
			height: '297mm',
			width: '210mm',
			timeout: 60 * 1000 * 2,
			margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
		});

		await page.close();

		return buffer as Uint8Array<ArrayBuffer>;
	} catch (err) {
		console.log('ERROR', 'generate pdf error', err);
		if (page) await page.close();
		throw err;
	}
}

// type UploadOptions = {
// 	title: string;
// 	locale: string;
// 	tags: string[];
// };

// export async function upload(
// 	buffer: Uint8Array<ArrayBuffer>,
// 	{ title, locale, tags }: UploadOptions,
// ) {
// 	const record = await client.items.list({ ...query, version: 'published' });
// 	const defaultFieldMetadata = { [locale]: { alt: title, title, customData: {} } };

// 	if (record.length === 1 && record[0].pdf_file?.[locale]) {
// 		const upload = await client.uploads.update(record[0].pdf_file[locale].upload_id, {
// 			path: await uploadLocalFileAndReturnPath(datoClient, filePath),
// 			defaultFieldMetadata,
// 		});
// 		/*
//     await datoClient.items.update(record[0].id, {
//       pdf_file: generatePdfField(record[0], locale, upload),
//     });
//     */
// 		console.log('revalidate...', record[0].id);
// 		await revalidate(record[0]);
// 		console.timeEnd(timer);
// 		return upload;
// 	} else if (record.length === 0) {
// 		console.timeEnd(timer);
// 		throw new Error(`Product not found! - ${title}`);
// 	}

// 	const upload = await client.uploads.createFromLocalFile({
// 		localPath: filePath,
// 		defaultFieldMetadata,
// 		tags,
// 	});

// 	console.log('publishing...', record[0].id);

// 	await datoClient.items.update(record[0].id, {
// 		pdf_file: generatePdfField(record[0], locale, upload),
// 	});

// 	if (record[0].meta.status === 'published') {
// 		console.log('publishing...', record[0].id);
// 		await datoClient.items.publish(record[0].id);
// 	}

// 	await revalidate(record[0]);

// 	console.timeEnd(timer);
// 	return upload;
// }

// function generatePdfField(record, locale, upload) {
// 	let pdf_file = { [locale]: { upload_id: upload.id } };

// 	locales.forEach((l) => {
// 		if (l !== locale)
// 			pdf_file[l] = record.pdf_file?.[l]?.upload_id
// 				? { upload_id: record.pdf_file[l]?.upload_id }
// 				: null;
// 		else if (l === locale) pdf_file[l] = { upload_id: upload.id };
// 	});
// 	return pdf_file;
// }
