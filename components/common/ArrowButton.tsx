import s from './ArrowButton.module.scss';
import cn from 'classnames';
import Arrow from '@/public/images/arrow.svg';
import type { MouseEventHandler } from 'react';

export type ArrowButtonProps = {
	inverted?: boolean;
	reverse?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	hide?: boolean;
};

export default function ArrowButton({
	className,
	inverted,
	reverse,
	onClick,
	hide,
}: ArrowButtonProps) {
	if (hide) return null;

	const buttonStyles = cn(s.arrowButton, className, inverted && s.inverted);

	return (
		<button className={buttonStyles} onClick={onClick}>
			<Arrow className={cn(s.arrow, reverse && s.reverse)} />
		</button>
	);
}
