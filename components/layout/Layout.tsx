import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer } from '/components'
import Menu from '../Menu'

type LayoutProps = { children: React.ReactNode, type?: string, color?:string, menu?:string }

export default function Layout({ children, type, color, menu }: LayoutProps) {

	return (
		<>
			<Menu layout={type} menu={menu}/>
			<div className={styles.layout} style={{backgroundColor:color}}>
				<Sidebar layout={type} menu={menu}/>
				<Content layout={type}>
					{children}
				</Content>
			</div>
			<Footer />
		</>

	)
}