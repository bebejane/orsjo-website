import * as pricelistController from '@/catalogue/lib/controllers/pricelist';
import { getCurrencyRateByLocale } from '@/lib/currency';
import { format } from 'date-fns';

export const maxDuration = 60;

export async function GET(req: Request, { params }: RouteContext<'/catalogue/[locale]/csv'>) {
	const { locale } = await params;
	const date = format(new Date(), 'yyyy-MM-dd');
	const currency = await getCurrencyRateByLocale(locale);
	const title = `Örsjo Pricelist (${currency.isoCode}) - ${date}.csv`;
	const encodedTitle = encodeURIComponent(title);
	const csv = await pricelistController.csv(locale as SiteLocale);
	return new Response(csv, {
		status: 200,
		headers: {
			'content-type': 'text/csv',
			'content-encoding': 'utf-8',
			'content-disposition': `attachment; filename="pricelist_csv.pdf"; filename*=UTF-8''${encodedTitle}`,
		},
	});
}
