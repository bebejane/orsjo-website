import chromium from '@sparticuz/chromium-min';
import puppeteerCore, { Browser as PuppeteerCoreBrowser, Page as PuppeteerCorePage } from 'puppeteer-core';
import puppeteer, { Browser as PuppeteerBrowser, Page as PuppeteerPage } from 'puppeteer';

type Browser = PuppeteerCoreBrowser | PuppeteerBrowser;
type Page = PuppeteerCorePage | PuppeteerPage;

let browser: Browser;

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get('url');
	if (!url) {
		return new Response(JSON.stringify({ error: 'URL parameter is required' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}
	const { buffer, filePath, locale, title } = await generatePDF(url, 'Test');

	return new Response(buffer, {
		status: 200,
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="${title}.pdf"`,
		},
	});
}

async function getBrowser(): Promise<Browser> {
	if (browser) return browser;

	if (process.env.NODE_ENV === 'production') {
		browser = await puppeteerCore.launch({
			args: chromium.args,
			executablePath: await chromium.executablePath(
				'https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar'
			),
			headless: true,
			pipe: false,
		});
	} else {
		browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
			headless: true,
			pipe: false,
		});
	}
	return browser;
}

async function generatePDF(url: string, title: string, locale = 'en') {
	let page: Page;

	try {
		const browser = await getBrowser();
		page = await browser.newPage();

		await page.authenticate({
			username: process.env.BASIC_AUTH_USER as string,
			password: process.env.BASIC_AUTH_PASSWORD as string,
		});

		console.log('generate pdf from: ', url);
		const res = await page.goto(`${url}`, { timeout: 60 * 1000, waitUntil: 'networkidle0' });

		if (res?.status() !== 200) throw new Error(`Internal server error. HTTP status: ${res?.status()}`);

		const filePath = `/tmp/${title}.pdf`;
		const buffer = await page.pdf({
			path: filePath,
			format: 'A4',
			printBackground: true,
			preferCSSPageSize: true,
			height: '297mm',
			width: '210mm',
			timeout: 60 * 1000 * 2,
			margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
		});

		await page.close();

		return { buffer, filePath, locale, title };
	} catch (err) {
		//if (page) await page.close();

		throw err;
	}
}
