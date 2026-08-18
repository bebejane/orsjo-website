import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

const COOKIE_NAME = 'pricelist_auth';

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

export default async function proxy(req: NextRequest) {
	const pathname = req.nextUrl.pathname;
	const isCatalogueRoute = pathname.startsWith('/pricelist');

	if (!isCatalogueRoute) {
		const handleI18nRouting = createMiddleware(routing);
		const response = handleI18nRouting(req);
		return response;
	}

	if (pathname === '/pricelist/login' || pathname === '/pricelist/plugin') {
		return NextResponse.next();
	}

	const token = req.cookies.get(COOKIE_NAME)?.value;
	if (!token) {
		return NextResponse.redirect(new URL('/pricelist/login', req.url));
	}

	const expected = await hashPassword(process.env.CATALOGUE_PASSWORD!);
	if (token !== expected) {
		return NextResponse.redirect(new URL('/pricelist/login', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		'/((?!api|favicon|_next|_vercel|monitoring|.*\\..*).*)',
	],
};
