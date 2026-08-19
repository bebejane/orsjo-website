import { toLanguageLocale } from '@/pricelist/lib/utils';
import { generate } from '@/pricelist/lib/controllers/pdf';
import { ProductByIdDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export async function GET(
	req: Request,
	{ params }: RouteContext<'/pricelist/[locale]/[environment]/product/[id]/pdf'>,
) {
	const { locale, id, environment } = await params;
	const url = req.url.split('/').slice(0, -1).join('/');
	const { product } = await apiQuery(ProductByIdDocument, {
		environment,
		variables: { id, locale: toLanguageLocale(locale) },
	});
	const title = `${product?.title} (${locale.toUpperCase()})`;
	return new Response(await generate(url), {
		status: 200,
		headers: {
			'content-type': 'application/pdf',
			'content-disposition': `attachment; filename="${title}.pdf"`,
		},
	});
}
