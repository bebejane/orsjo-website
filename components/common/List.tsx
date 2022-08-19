import styles from './List.module.scss'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { sectionId } from '/lib/utils'

export type ListProps = { children: React.ReactNode[], index?: number }

export default function List({ children, index }: ListProps) {

	const ref = useRef(null)
	const [selected, setSelected] = useState<any>(index !== undefined ? { [index]: true } : {})

	const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
		const idx = parseInt(e.target?.dataset.idx);
		const sel = { ...selected, [idx]: selected[idx] ? false : true }
		setSelected(sel)
	}
	useEffect(() => {
		const sel = { [index]: selected[index] ? false : true }
		setSelected(sel)
	}, [index])

	return (
		<ul className={styles.list} ref={ref}>
			{React.Children.map(children, (child, idx) =>
				React.isValidElement(child) ? React.cloneElement(child, {
					...child.props,
					parent: ref,
					selected: selected[idx],
					onToggle: handleSelect,
					idx,
				}) : child
			)}
		</ul>
	)
}

export type ListItemProps = {
	title?: string,
	children: React.ReactNode,
	idx?: number,
	selected?: boolean,
	parent?: HTMLUListElement,
	onToggle?: React.MouseEvent<HTMLButtonElement>
	className: string
}

export function ListItem({ children, title, parent, onToggle, idx, selected, className }: ListItemProps) {

	return (
		<li className={cn(styles.item, className)}>
			<section className={styles.wrapper} onClick={onToggle} data-idx={idx} {...sectionId(title)}>
				{title ? <h1>{title}</h1> : children}
				<div className={styles.toggle} >
					<h1>
						{selected ? '-' : '+'}
					</h1>
				</div>
			</section>
			{selected && title &&
				<div className={cn(styles.content, 'tableList')}>
					{children}
				</div>
			}
		</li>
	)
}
