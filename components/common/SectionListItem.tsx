import styles from './SectionListItem.module.scss'
import cn from 'classnames'
import { Section } from '/components'

export type SectionListItemProps = {
	title?: string,
	children: React.ReactNode,
	idx?: number,
	total?: number,
	selected?: boolean,
	parent?: HTMLUListElement,
	onToggle?: React.MouseEvent<HTMLButtonElement>
	className: string
}

export function SectionListItem({ children, title, onToggle, idx, total, selected, className }: SectionListItemProps) {
	
	return (
		<Section name={title} className={cn(styles.item, className)}>
			<div className={styles.wrapper} onClick={onToggle} data-idx={idx}>
				{title ? <h1>{title}</h1> : children}
				<div className={styles.toggle} >
					<h1>
						{selected ? '-' : '+'}
					</h1>
				</div>
			</div>
			<div className={cn(styles.content, selected && styles.selected, 'tableList', idx+1 === total && styles.last)}>
				{selected && title && children}
			</div>
		</Section>
	)
}