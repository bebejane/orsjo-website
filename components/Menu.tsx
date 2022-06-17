import styles from './Menu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useStore, shallow } from '/lib/store'

export type MenuProps = {}

const menu = [
	{name:'Products', slug:'/products'},
	{name:'Designers', slug:'/designers'},
	{name:'Professionals', slug:'/professionals'},
	{name:'Support', slug:'/support'},
	{name:'About', slug:'/about'},
	{name:'Contact', slug:'/contact'},
]

export default function Content({} : MenuProps) {

	const [showMenu] = useStore((state) => [state.showMenu], shallow);

	return (
		<nav className={cn(styles.menu, !showMenu && styles.hide)} id={'menu'}>
			<Link href={'/'}>
				<a className={styles.logo}>
					<img id={'logo'}  src={'/images/logo.svg'}/>
				</a>
			</Link>
			<ul className={styles.nav}>
				{menu.map(({name, slug}, idx) => 
					<li key={idx}>
						<Link href={slug}>
							<a>
								{name}
							</a>
						</Link>
					</li>
				)}
			</ul>
    </nav>
	)
}