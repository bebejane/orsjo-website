'use client';

import s from './TextReveal.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useEffect, useState } from 'react';
import { styleVariables } from '@/lib/utils';
import React, { Children } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Balancer from 'react-wrap-balancer';

type Props = {
	children: React.ReactNode | undefined;
	speed?: number;
	block?: boolean;
};

export default function TextReveal({ children = undefined, speed = 0.5, block = false }: Props) {
	const text = childrenToText(children);
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const [chars, setChars] = useState(text.length);
	let count = 0;

	useEffect(() => {
		if (isMobile) return setChars(text.length);

		const r = Math.min(1, scrolledPosition / (viewportHeight / (speed * 10)));
		const chars = text.length - Math.ceil(text.length * r);
		setChars(chars);
	}, [scrolledPosition, viewportHeight, setChars, text, speed, isMobile]);

	return (
		<>
			{text?.split('\n').map((p, key) => (
				<p key={key} className={s.paragraph}>
					<Balancer>
						{p.split(' ').map((word, widx) => (
							<span key={widx} className={cn(s.word, block && s.block)}>
								{word.split('').map((c, idx) => (
									<span key={idx} className={cn(s.letter, ++count > chars && s.hide)}>
										{c === '\n' ? <br /> : c}
									</span>
								))}
								{widx < text.split(' ').length - 1 ? <>&nbsp;</> : undefined}
							</span>
						))}
					</Balancer>
				</p>
			))}
		</>
	);
}

function childrenToText(children: React.ReactNode | undefined): string {
	const chars = Children.toArray(children).map((c) => {
		if (typeof c === 'string' || typeof c === 'number') {
			return [c];
		}
		if (React.isValidElement(c) && (c as React.ReactElement<any>).props.children) {
			return Children.toArray((c as React.ReactElement<any>).props.children).map((c2: React.ReactNode) =>
				typeof c2 === 'string' ? c2 : React.isValidElement(c2) && c2.type === 'br' ? '\n' : ''
			);
		}
		return [];
	});
	return chars
		.filter((arr) => arr.join(''))
		.map((arr) => arr.join(''))
		.join('');
}
