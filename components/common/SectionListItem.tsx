'use client';

import s from './SectionListItem.module.scss';
import cn from 'classnames';
import { Section } from '@/components';
import React from 'react';

export type SectionListItemProps = {
	title?: string;
	children?: React.ReactNode;
	idx?: number;
	total?: number;
	selected?: boolean;
	parent?: HTMLUListElement;
	onToggle?: (event: React.MouseEvent) => void;
	className: string;
};

export function SectionListItem({
	children,
	title,
	onToggle,
	idx,
	total,
	selected,
	className,
}: SectionListItemProps) {
	return (
		<Section name={title} className={cn(s.item, className)}>
			<div className={s.wrapper} onClick={onToggle} data-idx={idx}>
				{title ? <h1>{title}</h1> : children}
				<div className={s.toggle}>
					<h1>
						<span>{selected ? '–' : '+'}</span>
					</h1>
				</div>
			</div>

			<div
				className={cn(s.content, selected && s.selected, 'tableList', idx + 1 === total && s.last)}
			>
				{selected && title ? children : null}
			</div>
		</Section>
	);
}
