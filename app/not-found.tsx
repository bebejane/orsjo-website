'use client';

import ErrorPage from './error';
import { useRouter } from '@/i18n/routing';

export default function NotFound() {
	const router = useRouter();
	return <ErrorPage error={new Error('404: Not Found')} reset={() => router.push('/')} resetLabel='Go to Homepage' />;
}
