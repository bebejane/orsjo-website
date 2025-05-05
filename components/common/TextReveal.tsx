'use client';

import styles from './TextReveal.module.scss';
import { useScrollInfo } from 'dato-nextjs-utils/hooks';
import { useEffect, useState } from 'react';
import { styleVariables } from '@/lib/utils';
import cn from 'classnames';
import React, { Children } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const childrenToText = (children: React.ReactNode) => {
	const chars = Children.toArray(children).map((c) =>
		//@ts-ignore
		typeof c === 'string' || typeof c === 'number'
			? [c]
			: c.props.children.map((c2) => (typeof c2 === 'string' ? c2 : c2.type === 'br' ? '\n' : ''))
	);
	return chars
		.filter((arr) => arr.join(''))
		.map((arr) => arr.join(''))
		.join('');
};

type Props = {
	children: React.ReactNode;
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
				<p key={key} className={styles.paragraph}>
					{p.split(' ').map((word, widx) => (
						<span key={widx} className={cn(styles.word, block && styles.block)}>
							{word.split('').map((c, idx) => (
								<span key={idx} className={cn(styles.letter, ++count > chars && styles.hide)}>
									{c === '\n' ? <br /> : c}
								</span>
							))}
							{widx < text.split(' ').length - 1 ? <>&nbsp;</> : undefined}
						</span>
					))}
				</p>
			))}
		</>
	);
}
