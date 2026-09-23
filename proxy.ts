import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (pathname === '/plugin' || pathname.startsWith('/pricelist')) {
		return NextResponse.next();
	}

	const handleI18nRouting = createMiddleware(routing);
	return handleI18nRouting(req);
}

export const config = {
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		'/((?!api|favicon|_next|_vercel|monitoring|.*\\..*).*)',
	],
};