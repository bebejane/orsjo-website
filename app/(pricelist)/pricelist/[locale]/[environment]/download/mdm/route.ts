import * as mdmController from '@/pricelist/lib/controllers/mdm';
import { put } from '@vercel/blob';

export const maxDuration = 120;

export async function GET(
	req: Request,
	{ params }: RouteContext<'/pricelist/[locale]/[environment]/download/mdm'>,
) {
	const { locale, environment } = await params;

	const { buffer, filename } = await mdmController.generate(locale as SiteLocale, environment);

	const blob = await put(filename, buffer, {
		access: 'public',
		allowOverwrite: true,
		addRandomSuffix: true,
		// Bypass OIDC (which Vercel Blob rejects for the local "development"
		// environment) by pinning the read-write token when one is configured.
		...(process.env.BLOB_READ_WRITE_TOKEN ? { token: process.env.BLOB_READ_WRITE_TOKEN } : {}),
	});

	return Response.json({ url: blob.downloadUrl, filename });
}
