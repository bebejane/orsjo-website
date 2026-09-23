import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

const nonI18nRoutes = ['/pricelist', '/plugin'];

export default async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (nonI18nRoutes.some((route) => pathname.startsWith(route))) return NextResponse.next();

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
