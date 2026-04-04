import fs from 'fs';
import { Page } from 'puppeteer-core';
import { getBrowser } from '../puppeteer';
import { PDFDocument } from 'pdf-lib';
import { Upload } from '@datocms/cma-client/dist/types/generated/ApiTypes';
import { buildClient } from '@datocms/cma-client-node';
import { EnvironmentSettings, Product } from '@/types/datocms-cma';

const client = buildClient({
	apiToken: process.env.DATOCMS_API_TOKEN as string,
	environment: process.env.DATOCMS_ENVIRONMENT as string,
});

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

export async function merge(paths: string[], buffer: Uint8Array<ArrayBuffer>) {
	const mergedPdf = await PDFDocument.create();

	for (const path of paths) {
		const pdfBytes = fs.readFileSync(path);
		const pdf = await PDFDocument.load(pdfBytes);
		const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
		copiedPages.forEach((page) => mergedPdf.addPage(page));
	}

	const main = await PDFDocument.load(buffer);
	const copy = await mergedPdf.copyPages(main, main.getPageIndices());
	copy.forEach((page) => mergedPdf.addPage(page));
	const mergedPdfBytes = await mergedPdf.save();
	return Buffer.from(mergedPdfBytes);
}

type UploadOptions = {
	title: string;
	locale: SiteLocale;
	tags: string[];
};

export async function upload(
	id: string,
	buffer: Uint8Array<ArrayBuffer>,
	{ title, locale: _locale, tags }: UploadOptions,
): Promise<Upload> {
	let item = await client.items.find<Product>(id, { version: 'current' });
	if (!item) throw new Error('Item not found');

	const locales = (await client.site.find()).locales as EnvironmentSettings['locales'][];
	const locale = locales.find(
		(l) => l === _locale.replace('_', '-'),
	) as EnvironmentSettings['locales'];
	if (!locale) throw new Error('Locale not found');

	const defaultFieldMetadata = { [locale]: { alt: title, title, tags, customData: {} } };
	const uploadId = item.pdf_file[locale]?.upload_id;

	const localPath = `/tmp/${uploadId}`;
	fs.writeFileSync(localPath, buffer);

	let upload = await client.uploads.createFromLocalFile({
		localPath,
		default_field_metadata: defaultFieldMetadata,
	});

	if (uploadId)
		upload = await client.uploads.update(
			uploadId,
			{ path: localPath },
			{ replace_strategy: 'keep_url' },
		);

	const pdfFile: Record<string, Record<'upload_id', string> | null> = {
		[locale]: { upload_id: upload.id },
	};

	locales
		.filter((l) => l !== locale)
		.forEach((l) => {
			pdfFile[l] = item.pdf_file?.[l]?.upload_id ? { upload_id: item.pdf_file[l].upload_id } : null;
		});

	if (!pdfFile) throw new Error('pdf_file not found');

	await client.items.update(item.id, {
		pdf_file: pdfFile,
	});

	if (item.meta.status === 'published') await client.items.publish(item.id);
	return upload;
}
