import s from './Icon.module.scss';
import cn from 'classnames';
import React from 'react';

export type IconProps = {
	children?: React.ReactNode;
	type?: string;
	label?: string;
	disabled?: boolean;
	download?: boolean;
};

export default function Icon({
	type,
	label,
	children,
	disabled = false,
	download = true,
}: IconProps) {
	return (
		<div className={cn(s.icon, disabled && s.disabled)}>
			{type && (
				<span className={cn(s.type, 'icon')}>
					<div className={s.corner}></div>
					{type || children}
				</span>
			)}
			{label && <span className={cn(s.label, 'small')}>{label}</span>}
			{download && (
				<div className={cn(s.arrow, 'medium')}>
					<div>
						<img src='/images/arrow.svg' className={s.arrow} />
					</div>
				</div>
			)}
		</div>
	);
}
