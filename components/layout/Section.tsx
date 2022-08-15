import React, { useEffect, useState, useRef } from 'react'
import styles from './Section.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'

export type SectionProps = { children: React.ReactNode, className: string, type: string, name: string}

export default function Section({ children, className, type, name }: SectionProps) {

	return (
		<section 
			className={cn(styles.section, className)} 
			data-type={type}
			{...sectionId(name)}
		>
			{children}
		</section>
	)
}