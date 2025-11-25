'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PageTransition() {
	const pathname = usePathname();

	useEffect(() => {
		const pt = document.getElementById('page-transition');
		const pft = document.getElementById('page-fade-transition');

		if (!pt) return;
		const prevPathname = pt.getAttribute('pathname');
		const isSameBase = prevPathname?.split('/')[1] === pathname?.split('/')[1];

		if (prevPathname !== pathname) {
			pt.classList.toggle('enter', !isSameBase);
			pt.classList.toggle('exit', false);
		}
		if (pft) {
			pft.classList.toggle('enter', isSameBase);
			pft.classList.toggle('exit', false);
		}
	}, [pathname]);

	return (
		<>
			<div id='page-transition' />
			<div id='page-fade-transition' />
		</>
	);
}
