'use client';

import s from './Footer.module.scss';
import cn from 'classnames';
//import Link from 'next/link';
import Link from '@/components/nav/Link';
import type { MenuItem } from '@/lib/menu';
import social from '@/lib/social';
import { usePage } from '@/lib/context/page';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export type FooterProps = { menu: MenuItem[] };

export default function Footer({ menu: menuFromProps }: FooterProps) {
	const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>([...menuFromProps]);
	const { footerLine } = usePage();
	const maxLength = menu[0]?.sub?.length ?? 0;

	useEffect(() => {
		setMenu(
			JSON.parse(JSON.stringify(menuFromProps)).map((item) => ({
				...item,
				sub:
					item.type === 'designer'
						? item.sub.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, maxLength)
						: item.sub,
			}))
		);
	}, [menuFromProps, setMenu, maxLength]);

	return (
		<>
			<footer className={cn(s.footer, footerLine && s.line)} id='footer'>
				<div className={s.wrapperTop}>
					<div className={s.brand}>
						<div className={s.tagline}>
							<span>
								Locally
								<br />
								crafted
								<br />
								lighting
							</span>
						</div>
						<div className={s.iso}>
							<img src='/images/ISO-9001.png'></img>
							<img src='/images/ISO-14001.png'></img>
						</div>
					</div>
					<nav className={s.menu}>
						<ul>
							{menu.map((item, idx) => {
								return (
									<li key={idx}>
										<ul className={s.category}>
											<>
												<li>{item.label}</li>
												{item.sub?.map((subItem, subidx) => {
													const localAnchorLink =
														subItem.slug.indexOf('#') > -1 &&
														['/products', '/contact'].includes(pathname.split('#')[0]);
													return localAnchorLink ? (
														<a href={subItem.slug} key={subidx}>
															<li>{subItem.label}</li>
														</a>
													) : (
														<Link key={subidx} href={subItem.slug} passHref={true}>
															<li>{subItem.label}</li>
														</Link>
													);
												})}
											</>
										</ul>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

				<div className={s.wrapperBottom}>
					<div className={s.brand}>
						<figcaption>Örsjö Belysning</figcaption>
					</div>
					<nav className={s.lastRow}>
						<div className={s.social}>
							{social.map(({ name, icon, url }, idx) => (
								<a key={idx} href={url}>
									<img src={icon} alt={name} />
								</a>
							))}
						</div>
						<div className={s.copyright}>
							<figcaption>Copyright ©2023 Örsjö Belysning AB. All rights reserved.</figcaption>
						</div>
					</nav>
				</div>
			</footer>
			<footer className={cn(s.footerMobile, footerLine && s.line)}>
				<figure className={s.logo}>
					<img src={'/images/logo.svg'} />
				</figure>
				<span className={s.tagline}>
					Locally
					<br />
					crafted
					<br />
					lighting
				</span>
				<div className={s.social}>
					{social.map(({ name, icon, url }, idx) => (
						<a key={idx} href={url}>
							<img src={icon} alt={name} />
						</a>
					))}
				</div>
			</footer>
		</>
	);
}
