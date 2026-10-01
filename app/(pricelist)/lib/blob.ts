import { put } from '@vercel/blob';
import type { PutCommandOptions } from '@vercel/blob';

/** Body accepted by `@vercel/blob`'s `put` (derived from its signature). */
type PutBody = Parameters<typeof put>[1];

/**
 * Uploads a pricelist file to Vercel Blob with the standard pricelist
 * settings. On Vercel the SDK authenticates automatically; the token is only
 * pinned locally/self-hosted (Vercel Blob rejects OIDC in the dev
 * environment). Returns the public URL and the stored filename.
 */
export async function uploadFileBlob(
	filename: string,
	body: PutBody,
	options?: Partial<Pick<PutCommandOptions, 'access'>>,
): Promise<{ url: string; filename: string }> {
	const blob = await put(filename, body, {
		access: options?.access ?? 'public',
		allowOverwrite: true,
		addRandomSuffix: true,
		...(process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL
			? { token: process.env.BLOB_READ_WRITE_TOKEN }
			: {}),
	});

	return { url: blob.downloadUrl, filename };
}
