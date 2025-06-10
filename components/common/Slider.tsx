'use client';

import { useEffect, useRef, useState } from 'react';
export type SliderProps = {
	children: React.ReactElement<HTMLElement>;
	direction?: 'up' | 'down';
	hide?: boolean;
	display?: 'flex' | 'block' | 'inline-block';
	speed?: number;
};

export default function Slider({ children, direction = 'down', hide = false, display = 'flex', speed = 300 }: SliderProps) {
	const id = children?.props?.id;
	const [height, setHeight] = useState(0);
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		if (ref.current) return;
		const element = document.getElementById(id);
		if (!element) return console.warn(`Slider: No element with id ${id} found`);

		ref.current = element;
		element.style.display = display;
		element.style.overflowY = 'hidden';
		element.style.transition = [element.style.transition, `height ${speed}ms ease-out`].filter(Boolean).join(',');

		if (element.scrollHeight === 0) return console.warn(`Slider: Element with id ${id} has no height`);
		setHeight(element.scrollHeight);
	}, [id, hide, speed]);

	useEffect(() => {
		if (!ref.current) return;
		const element = ref.current;
		element.style.height = hide ? '0px' : `${height}px`;
	}, [direction, hide, height]);

	return <>{children}</>;
}
