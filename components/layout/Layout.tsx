import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer } from '/components'
import Menu from '../menu'
import { useLayout } from '/lib/context/layout'
import type { MenuItem } from '/lib/menu'

export type LayoutProps = { children: React.ReactNode, menu: MenuItem[] }

export default function Layout({ children, menu }: LayoutProps) {

	const {color} = useLayout()
	
	return (
		<>
			<Menu items={menu}/>	
			<div className={styles.layout} style={{backgroundColor: color}}>
				<Sidebar/>
				<Content>
					{children}
				</Content>
				
			</div>
			<Footer menu={menu}/>
		</>

	)
}