import * as pricelistController from '@/pricelist/lib/controllers/pricelist';
import { getCurrencyRateByLocale } from '@/lib/currency';
import { format } from 'date-fns';
import { put } from '@vercel/blob';

export const maxDuration = 60;

export async function GET(
	req: Request,
	{ params }: RouteContext<'/pricelist/[locale]/[environment]/csv'>,
) {
	const { locale, environment } = await params;
	const date = format(new Date(), 'yyyy-MM-dd');
	const currency = await getCurrencyRateByLocale(locale);
	const filename = `Örsjo Pricelist (${currency.isoCode}) - ${date}.csv`;
	const csv = await pricelistController.csv(locale as SiteLocale, environment);

	const blob = await put(filename, Buffer.from(csv), {
		access: 'public',
		allowOverwrite: true,
	});
	return Response.json({ url: blob.downloadUrl, filename });
}
