'use client';

import s from './Logo.module.scss';
import { Link } from '@/i18n/routing';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { usePathname } from '@/i18n/routing';

type Props = {
	inverted: boolean;
};

export default function Logo({ inverted = false }: Props) {
	const text = ['Ö', 'r', 's', 'j', 'ö'];
	const pathname = usePathname();
	const prevRoute = '';
	const [characters, setCharacters] = useState(text.length);
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const isStatic = prevRoute !== null && pathname !== '/';

	useEffect(() => {
		const r = Math.min(1, scrolledPosition / (viewportHeight / 2));
		const characters = text.length - Math.ceil(4 * r);
		setCharacters(characters);
	}, [pathname, scrolledPosition, viewportHeight, prevRoute]);

	return (
		<Link href='/' className={s.logo}>
			{text.slice(0, isStatic ? 1 : text.length).map((c, idx) => (
				<span
					key={idx}
					className={cn(
						idx + 1 > characters && s.hide,
						((idx === 0 && characters === 1) || isStatic) && s.big,
						inverted && s.inverted
					)}
				>
					{c}
				</span>
			))}
		</Link>
	);
}
