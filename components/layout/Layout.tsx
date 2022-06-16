import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer } from '/components'

type LayoutProps = { children: React.ReactNode }

export default function Layout({ children }: LayoutProps) {

	return (
		<>
			<div className={styles.layout}>
				<Sidebar />
				<Content>
					{children}
				</Content>
			</div>
			<Footer />
		</>

	)
}