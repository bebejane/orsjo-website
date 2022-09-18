import styles from './Footer.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import type { MenuItem } from '/lib/menu'
import social from '/lib/social'
import { useLayout } from '/lib/context/layout'

export type FooterProps = { menu: MenuItem[] }

export default function Footer({ menu }: FooterProps) {

	const { footerLine } = useLayout()
	const maxLength = menu[0].sub.length
	menu = menu.map((item) => ({
		...item,
		sub: item.type === 'designer' ? item.sub.slice(0, maxLength) : item.sub
	}))

	return (
		<>
			<footer className={cn(styles.footer, footerLine && styles.line)}>
				<div className={styles.wrapperTop}>
					<div className={styles.brand}>
						<div className={styles.tagline}>
							<span>Locally<br />crafted<br />lighting</span>
						</div>
					</div>
					<nav className={styles.menu}>
						<ul>
							{menu.map((item, idx) => {
								return (
									<li key={idx}>
										<ul className={styles.category}>
											<>
												<Link scroll={false} href={item.slug}>
													<a>
														<li>{item.label}</li>
													</a>
												</Link>
												{item.sub?.map((subItem, subidx) => {
													const endReached = subidx === maxLength;
													return (
														<Link scroll={false} key={subidx} href={subItem.slug}>
															<a>
																<li>{subItem.label}</li>
															</a>
														</Link>
													)
												}
												)}
											</>
										</ul>
									</li>
								)
							})}
						</ul>
					</nav>
				</div>

				<div className={styles.wrapperBottom}>
					<div className={styles.brand}>
						<figcaption>Örsjö Belysning</figcaption>
					</div>
					<nav className={styles.lastRow}>
						<div className={styles.social}>
							{social.map(({name, icon, url}, idx) =>
								<a key={idx} href={url}><img src={icon} alt={name}/></a>
							)}
						</div>
						<div className={styles.copyright}><figcaption>Copyright ©2022 Örsjö Belysning AB. All rights reserved.</figcaption></div>
					</nav>
				</div>
			</footer>
			<footer className={styles.footerMobile}>
				<figure className={styles.logo}>
					<img src={'/images/logo.svg'} />
				</figure>
				<span className={styles.tagline}>Locally<br/>crafted<br/>lighting</span>
				<div className={styles.social}>
					{social.map(({name, icon, url}, idx) =>
						<a key={idx} href={url}><img src={icon} alt={name}/></a>
					)}
				</div>
			</footer>
		</>
	)
}