import styles from './Menu.module.scss'
import Link from 'next/link'

type MenuProps = {}

const menu = [
	{name:'Products', slug:'/products'},
	{name:'Designers', slug:'/designers'},
	{name:'Professionals', slug:'/professionals'},
	{name:'Support', slug:'/support'},
	{name:'About', slug:'/about'},
	{name:'Contact', slug:'/contact'},
]

export default function Content({} : MenuProps) {

	return (
		<nav className={styles.menu} id={'menu'}>
			<Link href={'/'}>
				<a className={styles.logo}>
					<img id={'logo'}  src={'/images/logo.svg'}/>
				</a>
			</Link>
			<ul className={styles.nav}>
				{menu.map(({name, slug}, idx) => 
					<li key={idx}>{name}</li>
				)}
			</ul>
    </nav>
	)
}