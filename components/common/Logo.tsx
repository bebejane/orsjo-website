'use client';

import styles from './Logo.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { useStore, useShallow } from '@/lib/store';

type Props = {
	inverted: boolean;
};

const text = ['Ö', 'r', 's', 'j', 'ö'];

export default function Logo({ inverted = false }: Props) {
	const pathname = usePathname();
	//const prevRoute = usePreviousRoute();
	const prevRoute = '';
	const [characters, setCharacters] = useState(text.length);
	const [transitioning] = useStore(useShallow((state) => [state.transitioning]));
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const isStatic = prevRoute !== null && pathname !== '/';

	useEffect(() => {
		const r = Math.min(1, scrolledPosition / (viewportHeight / 2));
		const characters = text.length - Math.ceil(4 * r);
		setCharacters(characters);
	}, [scrolledPosition, viewportHeight, setCharacters, prevRoute]);

	return (
		<Link
			href='/'
			className={styles.logo}
			style={{ fontFamily: "'logo', Helvetica, sans-serif" }}
			scroll={false}
		>
			{text.slice(0, isStatic ? 1 : text.length).map((c, idx) => (
				<span
					key={idx}
					className={cn(
						idx + 1 > characters && styles.hide,
						((idx === 0 && characters === 1) || isStatic) && styles.big,
						inverted && styles.inverted
					)}
				>
					{c}
				</span>
			))}
		</Link>
	);
}
