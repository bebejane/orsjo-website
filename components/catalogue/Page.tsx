import styles from './Page.module.scss'
import cn from 'classnames'


export default function Page({ children, autoHeight }) {
	return (
		<section className={cn(styles.page, autoHeight && styles.autoHeight)}>{children}</section>
	)
}