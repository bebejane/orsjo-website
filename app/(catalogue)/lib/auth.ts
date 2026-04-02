import { headers as _headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

export const basicAuth = async () => {
	const headers = await _headers();
	const basicAuth = headers.get('authorization');
	let isAuthorized = false;

	if (basicAuth) {
		const auth = basicAuth.split(' ')[1];
		const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');
		isAuthorized = user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD;
	}
	if (!isAuthorized) return unauthorized();
};
