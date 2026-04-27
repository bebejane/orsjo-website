import { pricelists } from '@/catalogue/lib/pricelists';
import { generate, merge } from '@/catalogue/lib/controllers/pdf';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { getCurrencyRateByLocale } from '@/lib/currency';

export const maxDuration = 120;

const __dirname = dirname(fileURLToPath(import.meta.url));
const catalogueRoot = join(dirname(__dirname), '../..');

export async function GET(req: Request, { params }: RouteContext<'/catalogue/[locale]/[...pdf]'>) {
	const { locale, pdf } = await params;
	const pricelist = pricelists.find((p) => p.path === pdf[0]);
	const url = req.url.split('/').slice(0, -1).join('/');

	if (!pricelist) return new Response('Not found', { status: 404 });

	let data = await generate(url);

	if (pricelist.cover) {
		const coverPathname = `${catalogueRoot}/lib/covers/${locale}.pdf`;
		//console.log({ coverPathname });
		data = await merge([coverPathname], data);
	}
	const currency = await getCurrencyRateByLocale(locale);
	const title = `Örsjo prislista - ${pricelist.label} (${currency.isoCode})`;

	return new Response(data, {
		status: 200,
		headers: {
			'content-type': 'application/pdf',
			'content-disposition': `attachment; filename="${title}.pdf"`,
		},
	});
}
