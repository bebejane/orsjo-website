import { generate } from '@/catalogue/lib/controllers/pdf';
import { ProductByIdDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export async function GET(
	req: Request,
	{ params }: RouteContext<'/catalogue/[locale]/product/[id]/pdf'>,
) {
	const { locale, id } = await params;
	const url = req.url.split('/').slice(0, -1).join('/');
	const { product } = await apiQuery(ProductByIdDocument, {
		variables: { id },
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
