import * as pricelistController from '@/pricelist/lib/controllers/pricelist';
import { getCurrencyRateByLocale } from '@/lib/currency';
import { format } from 'date-fns';
import { put } from '@vercel/blob';
import { pricelists } from '@/app/(pricelist)/lib/pricelists';

export const maxDuration = 60;

export async function GET(
	req: Request,
	{ params }: RouteContext<'/pricelist/[locale]/[environment]/download/csv/[...csv]'>,
) {
	const { locale, environment, csv } = await params;
	const date = format(new Date(), 'yyyy-MM-dd');
	const currency = await getCurrencyRateByLocale(locale);
	const pricelist = pricelists.find((p) => p.path === csv[0]);
	if (!pricelist) return new Response('Not found', { status: 404 });
	const filename = `Örsjo Pricelist (${currency.isoCode}) - ${date}${pricelist.vat ? ' (incl. vat)' : ''}.csv`;
	const csvData = await pricelistController.csv(locale as SiteLocale, environment, pricelist.vat);

	const blob = await put(filename, Buffer.from(csvData), {
		access: 'public',
		allowOverwrite: true,
		addRandomSuffix: true,
	});
	return Response.json({ url: blob.downloadUrl, filename });
}
