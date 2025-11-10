'use client';

import { HTMLProps, FC, ComponentProps } from 'react';
import { sleep } from '@/lib/utils';
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
		if (!transition || pathname === props.href) return true;
		e.preventDefault();

		const pt = document.getElementById('page-transition');
		const pft = document.getElementById('page-fade-transition');
		const root = document.querySelector<HTMLDivElement>(':root');

		const isSameBase = pathname?.split('/')[1] === props.href?.split('/')[1];
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

	return (
		<NextIntlLink {...props} locale={locale} onClick={handleClick}>
			{props.children}
		</NextIntlLink>
	);
};

export default Link;
