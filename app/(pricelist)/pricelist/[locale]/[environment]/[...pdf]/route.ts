import { pricelists } from '@/pricelist/lib/pricelists';
import { generate, merge, mergeUrl } from '@/pricelist/lib/controllers/pdf';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { getCurrencyRateByLocale } from '@/lib/currency';
import { PricelistDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export const maxDuration = 120;

const __dirname = dirname(fileURLToPath(import.meta.url));
const catalogueRoot = join(dirname(__dirname), '../..');

export async function GET(
	req: Request,
	{ params }: RouteContext<'/pricelist/[locale]/[environment]/[...pdf]'>,
) {
	const { locale, environment, pdf } = await params;
	const pricelist = pricelists.find((p) => p.path === pdf[0]);
	const url = req.url.split('/').slice(0, -1).join('/');

	if (!pricelist) return new Response('Not found', { status: 404 });

	let data = await generate(url);

	const cover = await apiQuery(PricelistDocument, {
		environment,
		variables: { locale: locale as SiteLocale },
	});
	const coverUrl = !pricelist.vat ? cover.pricelist?.cover?.url : cover.pricelist?.coverIncVat?.url;
	if (!coverUrl) throw new Error('cover not found');
	data = await mergeUrl(coverUrl, data);

	const currency = await getCurrencyRateByLocale(locale);
	const title = `Örsjo Pricelist (${currency.isoCode}) - ${pricelist.label}`;
	const encodedTitle = encodeURIComponent(title);

	return new Response(data, {
		status: 200,
		headers: {
			'content-type': 'application/pdf',
			'content-disposition': `attachment; filename="pricelist.pdf"; filename*=UTF-8''${encodedTitle}.pdf`,
		},
	});
}
