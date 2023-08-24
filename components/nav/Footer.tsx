import styles from './Footer.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import type { MenuItem } from '/lib/menu'
import social from '/lib/social'
import { usePage } from '/lib/context/page'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useStore, { shallow } from '/lib/store'

export type FooterProps = { menu: MenuItem[] }

export default function Footer({ menu: menuFromProps }: FooterProps) {

	const { asPath } = useRouter()
	const [menu, setMenu] = useState<MenuItem[]>([...menuFromProps])
	const { footerLine } = usePage()
	const maxLength = menu[0].sub.length

	useEffect(() => {

		setMenu(JSON.parse(JSON.stringify(menuFromProps)).map((item) => ({
			...item,
			sub: item.type === 'designer' ? item.sub
				.sort(() => Math.random() > 0.5 ? 1 : -1)
				.slice(0, maxLength) : item.sub
		})))

	}, [menuFromProps, setMenu, maxLength])

	return (
		<>
			<footer className={cn(styles.footer, footerLine && styles.line)} id="footer">
				<div className={styles.wrapperTop}>
					<div className={styles.brand}>
						<div className={styles.tagline}>
							<span>Locally<br />crafted<br />lighting</span>
						</div>
						<div className={styles.iso}>
							<img src="/images/ISO-9001.png"></img>
							<img src="/images/ISO-14001.png"></img>
						</div>
					</div>
					<nav className={styles.menu}>
						<ul>
							{menu.map((item, idx) => {
								return (
									<li key={idx}>
										<ul className={styles.category}>
											<>
												<li>{item.label}</li>
												{item.sub?.map((subItem, subidx) => {
													const localAnchorLink = subItem.slug.indexOf('#') > -1 && ['/products', '/contact'].includes(asPath.split('#')[0])
													return (
														localAnchorLink ?
															<a href={subItem.slug} key={subidx}>
																<li>{subItem.label}</li>
															</a>
															:
															<Link scroll={false} key={subidx} href={subItem.slug} passHref={true}>
																<li>{subItem.label}</li>
															</Link>
													)
												})}
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
							{social.map(({ name, icon, url }, idx) =>
								<a key={idx} href={url}><img src={icon} alt={name} /></a>
							)}
						</div>
						<div className={styles.copyright}><figcaption>Copyright ©2023 Örsjö Belysning AB. All rights reserved.</figcaption></div>
					</nav>
				</div>
			</footer>
			<footer className={cn(styles.footerMobile, footerLine && styles.line)}>
				<figure className={styles.logo}>
					<img src={'/images/logo.svg'} />
				</figure>
				<span className={styles.tagline}>Locally<br />crafted<br />lighting</span>
				<div className={styles.social}>
					{social.map(({ name, icon, url }, idx) =>
						<a key={idx} href={url}><img src={icon} alt={name} /></a>
					)}
				</div>
			</footer>
		</>
	)
}