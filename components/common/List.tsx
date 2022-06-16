import styles from './List.module.scss'
import React, { MouseEventHandler, useRef, useState } from 'react'

type ListProps = { children: React.ReactNode[], initial: number }

export default function List({ children, initial }: ListProps) {

	const ref = useRef(null)
	const [selected, setSelected] = useState<any>(initial !== undefined ? { [initial]: true } : {})

	const handleSelect = (e: MouseEvent) => {
		const idx = parseInt(e.target?.dataset.idx);
		setSelected({ ...selected, [idx]: selected[idx] ? false : true })
	}
	console.log(selected)
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

type ListItemProps = { title: string, children: React.ReactNode, idx?: number, selected?: boolean, parent?: HTMLUListElement, onToggle?: MouseEventHandler }

export function ListItem({ children, title, parent, onToggle, idx, selected }: ListItemProps) {

	return (
		<li className={styles.item}>
			<div className={styles.wrapper} onClick={onToggle} data-idx={idx}>
				<h1>{title}</h1>
				<div className={styles.toggle} >
					<h1>
						{selected ? '-' : '+'}
					</h1>
				</div>
			</div>
			<div className={styles.content}>
				{selected && children}
			</div>
		</li>
	)
}