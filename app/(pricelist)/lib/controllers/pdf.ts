import fs from 'fs';
import { Page } from 'puppeteer-core';
import { getBrowser } from '../puppeteer';
import { PDFArray, PDFDict, PDFDocument, PDFName, PDFRef } from 'pdf-lib';
import { Upload } from '@datocms/cma-client/dist/types/generated/ApiTypes.js';
import { buildClient } from '@datocms/cma-client-node';
import { EnvironmentSettings, Product } from '@/types/datocms-cma';
import { hashPassword } from '@/app/(pricelist)/lib/auth';
import { sleep } from 'next-dato-utils/utils';

const client = buildClient({
	apiToken: process.env.DATOCMS_API_TOKEN as string,
	environment: process.env.DATOCMS_ENVIRONMENT as string,
});

export async function generate(url: string): Promise<Uint8Array<ArrayBuffer>> {
	let page: Page | null = null;

	try {
		console.time(`generate pdf: ${url}`);

		const browser = await getBrowser();
		page = await browser.newPage();
		const token = await hashPassword(process.env.CATALOGUE_PASSWORD!);

		await browser.setCookie({
			name: 'pricelist_auth',
			value: token,
			domain: new URL(url).hostname,
			path: '/',
		});

		const res = await page.goto(url, { timeout: 120 * 1000, waitUntil: 'networkidle0' });

		await sleep(5000);

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
	} finally {
		console.timeEnd(`generate pdf: ${url}`);
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

function getLinksPDFName(): PDFName {
	return PDFName.of('Dests');
}
function copyLinks(sources: PDFDocument[], target: PDFDocument) {
	const targetLinksDict = PDFDict.withContext(target.context);
	const LINKS_PDF_NAME = getLinksPDFName();
	let currentTargetPage = 0;
	for (const source of sources) {
		const { mapping, targetPage } = mapSourceToTargetPages(source, target, currentTargetPage);
		currentTargetPage = targetPage;

		const links = source.context.lookupMaybe(source.catalog.get(LINKS_PDF_NAME), PDFDict);
		if (links !== null) {
			links?.entries().forEach(([destName, destValue]) => {
				const currentRef = (destValue as PDFArray).get(0) as PDFRef;
				(destValue as PDFArray).set(0, mapping[currentRef.tag]);
				targetLinksDict.set(destName, destValue);
			});
		}
	}

	const destinationDestsRef = target.context.register(targetLinksDict);
	target.catalog.set(LINKS_PDF_NAME, destinationDestsRef);
}

function mapSourceToTargetPages(
	source: PDFDocument,
	target: PDFDocument,
	startingTargetPage: number,
): { mapping: Record<string, PDFRef>; targetPage: number } {
	const result: Record<string, PDFRef> = {};
	const targetPages = target.getPages();
	let currentTargetPage = startingTargetPage;
	const sourcePages = source.getPages();

	for (let i = 0; i < sourcePages.length; i++) {
		result[sourcePages[i].ref.tag] = targetPages[currentTargetPage]?.ref;
		currentTargetPage++;
	}

	return { mapping: result, targetPage: currentTargetPage };
}

export async function mergeUrl(url: string, buffer: Uint8Array<ArrayBuffer>) {
	const output = await PDFDocument.create();
	const mergedPdf = await PDFDocument.load(buffer); // keep generated pricelist as base → anchors intact
	const pdfBytes = await (await fetch(url)).arrayBuffer();
	const cover = await PDFDocument.load(pdfBytes);
	const coverPages = await mergedPdf.copyPages(cover, cover.getPageIndices());
	coverPages.reverse().forEach((page) => mergedPdf.insertPage(0, page)); // prepend cover
	copyLinks([cover, mergedPdf], output);
	return Buffer.from(await output.save());
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
	console.time(`upload pdf: ${title}`);
	let item = await client.items.find<Product>(id, { version: 'current' });
	if (!item) throw new Error('Item not found');

	const locales = (await client.site.find()).locales as EnvironmentSettings['locales'][];
	const locale = locales.find(
		(l) => l === _locale.replace('_', '-'),
	) as EnvironmentSettings['locales'];
	if (!locale) throw new Error('Locale not found');

	const defaultFieldMetadata = { [locale]: { alt: title, title, custom_data: {} } };
	const uploadId = item.pdf_file[locale]?.upload_id;
	const localPath = `/tmp/${title}.pdf`;

	fs.writeFileSync(localPath, buffer);

	let upload = await client.uploads.createFromLocalFile({
		localPath,
		default_field_metadata: defaultFieldMetadata,
		tags: ['product-pdf'],
	});

	fs.unlinkSync(localPath);

	if (uploadId) {
		upload = await client.uploads.update(
			uploadId,
			{ path: upload.path },
			{ replace_strategy: 'keep_url' },
		);
	} else {
		console.log('new upload');
		const pdfFile: Record<string, Record<'upload_id', string> | null> = {
			[locale]: { upload_id: upload.id },
		};

		locales
			.filter((l) => l !== locale)
			.forEach((l) => {
				pdfFile[l] = item.pdf_file?.[l]?.upload_id
					? { upload_id: item.pdf_file[l].upload_id }
					: null;
			});

		if (!pdfFile) throw new Error('pdf_file not found');

		await client.items.update(item.id, {
			pdf_file: pdfFile,
		});

		if (item.meta.status === 'published') await client.items.publish(item.id);
	}
	console.timeEnd(`upload pdf: ${title}`);
	return upload;
}
