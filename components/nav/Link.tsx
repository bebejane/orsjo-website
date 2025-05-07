'use client';

import { usePathname, useRouter } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';
import { HTMLProps, FC } from 'react';
import { sleep } from '@/lib/utils';
import { useEffect } from 'react';
import { pathnameToColor } from '@/lib/utils';

const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = (props) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = async (e: any) => {
		e.preventDefault();
		const el = document.getElementById('page-transition');
		document
			.querySelector<HTMLDivElement>(':root')
			?.style.setProperty('--page-color', `rgba(var(${pathnameToColor(props.href)}),1)`);
		if (el) {
			el.setAttribute('pathname', pathname);
			el.classList.toggle('enter', false);
			el.classList.toggle('exit', true);
		}
		router.prefetch(props.href);
		await sleep(500);
		router.push(props.href);
	};

	useEffect(() => {
		const el = document.getElementById('page-transition');
		if (!el) return;
		if (el.dataset.pathname !== pathname) {
			el.classList.toggle('enter', true);
			el.classList.toggle('exit', false);
		}
	}, [pathname]);

	return (
		<NextLink {...props} onClick={handleClick}>
			{props.children}
		</NextLink>
	);
};

export default Link;
