'use client';

import { HTMLProps, FC, ComponentProps } from 'react';
import { sleep } from '@/lib/utils';
import { useEffect } from 'react';
import { pathnameToColor } from '@/lib/utils';
import { useRouter, usePathname, Link as NextIntlLink } from '@/i18n/routing';
import { useLocale } from 'next-intl';

type LinkProp = ComponentProps<typeof NextIntlLink> & {
	transition?: boolean;
};

const Link: FC<LinkProp & HTMLProps<HTMLAnchorElement>> = ({ transition = true, ...props }) => {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const handleClick = async (e: any) => {
		if (!transition) return true;
		e.preventDefault();

		const pt = document.getElementById('page-transition');
		const pft = document.getElementById('page-fade-transition');
		const root = document.querySelector<HTMLDivElement>(':root');

		const isSameBase = pathname?.split('/')[0] === props.href?.split('/')[0];
		root?.style.setProperty('--page-color', `var(${pathnameToColor(props.href) ?? '--white'})`);

		if (pt) {
			pt.setAttribute('pathname', pathname);
			pt.classList.toggle('enter', false);
			pt.classList.toggle('exit', !isSameBase);
		}
		if (pft) {
			pft.classList.toggle('enter', false);
			pft.classList.toggle('exit', isSameBase);
		}

		await sleep(isSameBase ? 300 : 500);
		router.push(props.href, { locale });
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
		<NextIntlLink {...props} locale={locale} onClick={handleClick}>
			{props.children}
		</NextIntlLink>
	);
};

export default Link;
