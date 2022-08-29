import React, { useEffect, useState, useRef } from 'react'
import styles from './Section.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { useLayout } from '/lib/context/layout'

export type SectionProps = { 
	children?: React.ReactNode, 
	className?: string, 
	type?: string, 
	name?: string, 
	id?: string,
	top?: boolean,
	bottom?: boolean,
	bgColor?: string 
}

export default function Section({ children, className, type, name, id, top, bottom, bgColor }: SectionProps) {
	const color = bgColor?.startsWith('--') ? `rgba(var(${bgColor}))` : bgColor ? bgColor : undefined;
	
	return (
		<section 
			className={styles.section}
			style={{backgroundColor: color}}
			data-type={type}
			data-top={top}
			data-bottom={bottom}
			{...sectionId(name, id)}
		>
			<div className={cn(styles.wrap, className)}>
				{children}
			</div>
		</section>
	)
}