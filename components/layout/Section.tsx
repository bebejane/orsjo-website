import React, { useEffect, useState, useRef } from 'react'
import styles from './Section.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { usePage } from '/lib/context/page'
import { useInView } from 'react-intersection-observer';

export type SectionProps = {
	children?: React.ReactNode,
	className?: string,
	type?: string,
	name?: string,
	id?: string,
	top?: boolean,
	bottom?: boolean,
	bgColor?: string,
	disableSidebar?: boolean,
	fadeColor?: string
}

export default function Section({
	children,
	className,
	type,
	name,
	id,
	top,
	bottom,
	bgColor,
	fadeColor,
	disableSidebar = false
}: SectionProps) {

	const color = bgColor?.startsWith('--') ? `rgba(var(${bgColor}))` : bgColor ? bgColor : undefined;
	const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: false })

	fadeColor = fadeColor?.startsWith('--') ? `var(${fadeColor})` : fadeColor

	return (

		<section
			className={styles.section}
			style={{ backgroundColor: fadeColor && !inView ? fadeColor : color }}
			data-type={type}
			data-top={top}
			data-bottom={bottom}
			ref={ref}
			{...sectionId(!disableSidebar ? name : undefined, id)}
		>
			<div className={cn(styles.wrap, className)}>
				{children}
			</div>
		</section>
	)
}