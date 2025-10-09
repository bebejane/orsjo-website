'use client';

import s from './global-error.module.scss';
import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<html>
			<body className={s.body}>
				<main className={s.error}>
					<h2>Something went wrong!</h2>
					<h3>{error.name}</h3>
					<p>{error.message}</p>
					<p>{error.digest}</p>
					<button onClick={() => reset()}>Try again</button>
				</main>
			</body>
		</html>
	);
}
