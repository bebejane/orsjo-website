'use client';

import { useEffect, useState } from 'react';

export default function OrderInfo() {
	const [params, setParams] = useState<any>();

	useEffect(() => {
		const p = new URL(window.location.href).searchParams;
		setParams(
			p.keys().reduce((acc, key) => {
				acc[key] = p.get(key);
				return acc;
			}, {} as any),
		);
	}, []);
	return null;
	return <p>order</p>;
}
