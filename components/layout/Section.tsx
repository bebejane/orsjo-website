'use client';

import React from 'react';
import s from './Section.module.scss';
import cn from 'classnames';
import { sectionId } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

export type SectionProps = {
	'children'?: React.ReactNode;
	'className'?: string;
	'type'?: string;
	'name'?: string | null | undefined;
	'id'?: string;
	'top'?: boolean;
	'bottom'?: boolean;
	'bgColor'?: string;
	'disableSidebar'?: boolean;
	'fadeColor'?: string;
	'data-datocms-content-link-group'?: string | boolean;
	'data-datocms-content-link-boundary'?: string | boolean;
};

export default function Section({
	children,
	className,
	type,
	name,
	id,
	top,
	bottom,
	bgColor,
	'fadeColor': _fadeColor,
	disableSidebar = false,
	'data-datocms-content-link-group': dataDatocmsContentLinkGroup,
	'data-datocms-content-link-boundary': dataDatocmsContentLinkBoundary,
}: SectionProps) {
	const color = bgColor?.startsWith('--') ? `var(${bgColor})` : bgColor ? bgColor : undefined;
	const fadeColor = _fadeColor?.startsWith('--') ? `var(${_fadeColor})` : (_fadeColor ?? undefined);
	const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: false });

	return (
		<section
			className={s.section}
			style={{ backgroundColor: fadeColor && !inView ? fadeColor : color }}
			data-type={type}
			data-top={top}
			data-bottom={bottom}
			ref={ref}
			data-datocms-content-link-group={dataDatocmsContentLinkGroup}
			data-datocms-content-link-boundary={dataDatocmsContentLinkBoundary}
			{...sectionId(!disableSidebar ? name : undefined, id)}
		>
			<div className={cn(s.wrap, className)}>{children}</div>
		</section>
	);
}
