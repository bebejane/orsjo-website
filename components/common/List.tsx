import styles from './List.module.scss'
import cn from 'classnames'
import React, { useRef, useState } from 'react'

export type ListProps = { children: React.ReactNode[], initial: number }

export default function List({ children, initial }: ListProps) {

	const ref = useRef(null)
	const [selected, setSelected] = useState<any>(initial !== undefined ? { [initial]: true } : {})

	const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
		const idx = parseInt(e.target?.dataset.idx);
		setSelected({ ...selected, [idx]: selected[idx] ? false : true })
	}
	
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
			<div className={styles.wrapper} onClick={onToggle} data-idx={idx}>
				{title ? <h1>{title}</h1> : children}
				<div className={styles.toggle} >
					<h1>
						{selected ? '-' : '+'}
					</h1>
				</div>
			</div>
			{selected && title &&
				<div className={styles.content}>
					{children}
				</div>
			}
		</li>
	)
}
