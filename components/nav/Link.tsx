'use client';

import { usePathname, useRouter } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';
import { HTMLProps, FC } from 'react';
import { sleep } from '@/lib/utils';
import { useEffect } from 'react';
import { pathnameToColor } from '@/lib/utils';
import useCountry from '@/lib/shopify/hooks/useCountry';

const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = (props) => {
	const router = useRouter();
	const pathname = usePathname();
	const country = useCountry();
	const href = `${country !== 'SE' ? `/${country.toLowerCase()}` : ''}${props.href}`;

	const handleClick = async (e: any) => {
		e.preventDefault();
		const pt = document.getElementById('page-transition');
		const pft = document.getElementById('page-fade-transition');
		const root = document.querySelector<HTMLDivElement>(':root');
		root?.style.setProperty('--page-color', `var(${pathnameToColor(props.href) ?? '--white'})`);
		const isSameBase = pathname?.split('/')[1] === props.href?.split('/')[1];

		if (pt) {
			pt.setAttribute('pathname', pathname);
			pt.classList.toggle('enter', false);
			pt.classList.toggle('exit', !isSameBase);
		}
		if (pft) {
			pft.classList.toggle('enter', false);
			pft.classList.toggle('exit', isSameBase);
		}
		router.prefetch(href);

		await sleep(isSameBase ? 300 : 500);

		router.push(href);
	};

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
		<NextLink {...props} href={href} onClick={handleClick}>
			{props.children}
		</NextLink>
	);
};

export default Link;
