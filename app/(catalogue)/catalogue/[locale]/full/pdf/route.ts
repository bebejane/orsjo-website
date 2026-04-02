import { generate, merge } from '@/app/(catalogue)/lib/pdf';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const catalogueRoot = join(dirname(__dirname), '../../..');

export async function GET(req: Request, { params }: RouteContext<'/catalogue/[locale]/full/pdf'>) {
	const { locale } = await params;
	const url = req.url.split('/').slice(0, -1).join('/');
	const title = `Örsjo prislista - Full (${locale.toUpperCase()})`;
	const buffer = await generate(url);
	const coverPathname = `${catalogueRoot}/lib/covers/catalogue-cover-page-${locale}.pdf`;
	console.log(coverPathname);
	const pdf = await merge([coverPathname], buffer);

	return new Response(pdf, {
		status: 200,
		headers: {
			'content-type': 'application/pdf',
			'content-disposition': `attachment; filename="${title}.pdf"`,
		},
	});
}
