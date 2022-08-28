import styles from './Footer.module.scss'
import Logo from '/public/images/logo.svg'
import Link from 'next/link'
import type { MenuItem } from '/lib/menu'

export type FooterProps = { menu: MenuItem[] }

export default function Footer({ menu }: FooterProps) {

	const maxLength = menu[0].sub.length
	menu = menu.map((item) => ({
		...item,
		sub: item.type === 'designer' ? item.sub.slice(0, maxLength) : item.sub
	}))

	const social = [
		{name:'Facebook', icon:'/images/facebook.svg', url:'https://www.facebook.com/orsjobelysning'},
		{name:'Instagram', icon:'/images/instagram.svg',url:'https://www.instagram.com/orsjo_belysning'},
		{name:'LinkedIn', icon:'/images/linkedin.svg', url:'https://www.linkedin.com/company/orsjo-belysning-ab'},
		{name:'Pinterest', icon:'/images/Pinterest.svg', url:'https://www.pinterest.se/orsjoab'},
	]

	return (
		<>
			<footer className={styles.footer}>
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
				<img src={'/images/logo.svg'} className={styles.logo}/>
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