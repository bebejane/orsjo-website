'use client';

import s from './error.module.scss';
import { useEffect, useState } from 'react';

export default function ErrorPage({
	error,
	reset,
	resetLabel = 'Try again',
}: {
	error: Error & { digest?: string };
	reset?: () => void;
	resetLabel?: string;
}) {
	const [show, setShow] = useState(true);
	useEffect(() => {
		console.error(error);
	}, [error]);

	if (!show) return null;

	return (
		<div className={s.error}>
			<div className={s.wrap}>
				<h1>Something went wrong!</h1>
				<p>{error.message ?? error}</p>
				{reset && <button onClick={() => reset()}>{resetLabel}</button>}
				<button className={s.close} onClick={() => setShow(false)}>
					Close
				</button>
			</div>
		</div>
	);
}
