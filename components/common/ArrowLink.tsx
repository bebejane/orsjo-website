'use client';

import s from './ArrowLink.module.scss';
import cn from 'classnames';
import Arrow from '@/public/images/arrow.svg';
import { useEffect, useState } from 'react';

export type ArrowLinkProps = {
	title?: string;
	href?: string;
	inverted?: boolean;
	reversed?: boolean;
	hoverRef?: React.MutableRefObject<HTMLSpanElement | null>;
	children?: string | undefined;
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

	function handleHover(e: MouseEvent | React.MouseEvent<HTMLSpanElement>) {
		const type = e.type;
		setHover(['mousemove', 'mouseenter'].includes(type));
	}

	useEffect(() => {
		if (!hoverRef?.current) return;

		const ref = hoverRef.current;

		ref.addEventListener('mousemove', (e) => handleHover(e as MouseEvent));
		ref.addEventListener('mouseenter', (e) => handleHover(e as MouseEvent));
		ref.addEventListener('mouseleave', (e) => handleHover(e as MouseEvent));

		return () => {
			ref.removeEventListener('mousemove', (e) => handleHover(e as MouseEvent));
			ref.removeEventListener('mouseenter', (e) => handleHover(e as MouseEvent));
			ref.removeEventListener('mouseleave', (e) => handleHover(e as MouseEvent));
		};
	}, [hoverRef]);

	const className = cn(s.arrowLink, 'medium', inverted && s.inverted, reversed && s.reversed, hover && s.hover);

	return (
		<div className={className}>
			<span onMouseEnter={handleHover} onMouseLeave={handleHover}>
				<Arrow className={s.arrow} />
				{title || children}
			</span>
		</div>
	);
}
