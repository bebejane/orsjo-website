import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default async function proxy(req: NextRequest) {
	const isCatalogueRoute = req.nextUrl.pathname.startsWith('/catalogue');

	if (!isCatalogueRoute) {
		const handleI18nRouting = createMiddleware(routing);
		const response = handleI18nRouting(req);
		return response;
	}

	const { headers } = req;
	const basicAuth = headers.get('authorization');

	let isAuthorized = false;

	if (basicAuth) {
		const auth = basicAuth.split(' ')[1];
		const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');
		isAuthorized = user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD;
	}

	if (!isAuthorized) {
		return new NextResponse('unauthorized', {
			status: 401,
			headers: {
				'WWW-Authenticate': `Basic relm="private"`,
			},
		});
	} else return NextResponse.next();
}

export const config = {
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		'/((?!api|favicon|_next|_vercel|monitoring|.*\\..*).*)',
	],
};
