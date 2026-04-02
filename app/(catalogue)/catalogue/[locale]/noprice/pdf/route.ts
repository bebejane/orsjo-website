import { generate } from '@/app/(catalogue)/lib/pdf';

export async function GET(
	req: Request,
	{ params }: RouteContext<'/catalogue/[locale]/noprice/pdf'>,
) {
	const { locale } = await params;
	const url = req.url.split('/').slice(0, -1).join('/');
	const title = `Örsjo prislista - No price (${locale.toUpperCase()})`;
	return new Response(await generate(url), {
		status: 200,
		headers: {
			'content-type': 'application/pdf',
			'content-disposition': `attachment; filename="${title}.pdf"`,
		},
	});
}
