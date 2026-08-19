import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE_NAME = 'pricelist_auth';

export async function hashPassword(password: string): Promise<string> {
	const data = new TextEncoder().encode(password);
	const secret = new TextEncoder().encode(process.env.CATALOGUE_PASSWORD!);
	const key = await crypto.subtle.importKey(
		'raw',
		secret,
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign'],
	);
	const signature = await crypto.subtle.sign('HMAC', key, data);
	return Array.from(new Uint8Array(signature))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');
}

export async function verifyCatalogueAuth() {
	const cookieStore = await cookies();
	const token = cookieStore.get(COOKIE_NAME)?.value;

	if (!token) redirect('/pricelist/login');

	const expected = await hashPassword(process.env.CATALOGUE_PASSWORD!);
	if (token !== expected) redirect('/pricelist/login');
}
