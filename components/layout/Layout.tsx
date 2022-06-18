import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer } from '/components'
import Menu from '../Menu'
import { useLayout } from '/lib/context/layout'

export type LayoutProps = { children: React.ReactNode }

export default function Layout({ children }: LayoutProps) {

	const layout = useLayout()

	return (
		<>
			<Menu/>
			<div className={styles.layout} style={{backgroundColor: layout.color}}>
				<Sidebar/>
				<Content>
					{children}
				</Content>
			</div>
			<Footer />
		</>

	)
}