import styles from './Page.module.scss'


export default function Page({ children }) {
	return (
		<section className={styles.page}>{children}</section>
	)
}