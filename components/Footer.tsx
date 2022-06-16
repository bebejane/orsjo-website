import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.brand}>
					<div className={styles.tagline}>
						<span>Locally crafted lighting</span>
					</div>
				</div>
				<nav>
					<ul>
						<li>Products</li>
						<li>Ceiling</li>
					</ul>
				</nav>
			</div>

			<div className={styles.wrapper}>
				<div className={styles.brand}>
					Örsjö Belysning
				</div>
				<nav className={styles.lastRow}>
					<div className={styles.social}>
						I Fb LIn P
					</div>
					<div className={styles.copyright}>Copyright ©2022 Örsjö Belysning AB. All rights reserved.</div>
				</nav>
			</div>
		</footer>
	)
}