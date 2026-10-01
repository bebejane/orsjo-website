import * as mdmController from '@/pricelist/lib/controllers/mdm';
import { uploadFileBlob } from '@/pricelist/lib/blob';

export const maxDuration = 120;

export async function GET(
	req: Request,
	{ params }: RouteContext<'/pricelist/[locale]/[environment]/download/mdm'>,
) {
	const { locale, environment } = await params;

	const { buffer, filename } = await mdmController.generate(locale as SiteLocale, environment);

	const { url, filename: blobFilename } = await uploadFileBlob(filename, buffer);

	return Response.json({ url, filename: blobFilename });
}
