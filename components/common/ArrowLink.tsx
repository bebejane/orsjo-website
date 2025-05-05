'use client';

import s from './ArrowLink.module.scss';
import cn from 'classnames';
import Arrow from '@/public/images/arrow.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export type ArrowLinkProps = {
	title?: string;
	href?: string;
	inverted?: boolean;
	reversed?: boolean;
	hoverRef?: React.MutableRefObject<HTMLElement>;
	children?: string;
};

export default function ArrowLink({
	children,
	title,
	href,
	hoverRef,
	inverted = false,
	reversed = false,
}: ArrowLinkProps) {
	const [hover, setHover] = useState(false);
	const handleHover = ({ type }) => setHover(['mousemove', 'mouseenter'].includes(type));

	useEffect(() => {
		if (!hoverRef?.current) return;

		const ref = hoverRef.current;

		ref.addEventListener('mousemove', handleHover);
		ref.addEventListener('mouseenter', handleHover);
		ref.addEventListener('mouseleave', handleHover);

		return () => {
			ref.removeEventListener('mousemove', handleHover);
			ref.removeEventListener('mouseenter', handleHover);
			ref.removeEventListener('mouseleave', handleHover);
		};
	}, [hoverRef]);

	const className = cn(
		s.arrowLink,
		'medium',
		inverted && s.inverted,
		reversed && s.reversed,
		hover && s.hover
	);

	return (
		<div className={className}>
			<span onMouseEnter={handleHover} onMouseLeave={handleHover}>
				<Arrow className={s.arrow} />
				{title || children}
			</span>
		</div>
	);
}
