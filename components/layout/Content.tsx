import React from 'react'
import styles from './Content.module.scss'

type ContentProps = {children:React.ReactNode}

export default function Content({children} : ContentProps) {

	return (
		<main className={styles.content}>
      {children}
    </main>
	)
}