'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE_NAME = 'pricelist_auth';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

async function hashPassword(password: string): Promise<string> {
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

export async function loginAction(_prev: { error: string } | null, formData: FormData) {
	const password = formData.get('password') as string;

	if (password !== process.env.CATALOGUE_PASSWORD) {
		return { error: 'Invalid password' };
	}

	const token = await hashPassword(password);
	const cookieStore = await cookies();
	const isProduction = process.env.NODE_ENV === 'production';
	cookieStore.set(COOKIE_NAME, token, {
		httpOnly: true,
		secure: isProduction,
		sameSite: isProduction ? 'none' : 'lax',
		path: '/',
		maxAge: MAX_AGE,
	});

	redirect('/pricelist');
}

export async function logoutAction() {
	const cookieStore = await cookies();
	cookieStore.delete(COOKIE_NAME);
	redirect('/pricelist/login');
}
