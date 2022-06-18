
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import type { MenuItem } from '/lib/menu'

export type MenuProps = { items: MenuItem[]}

export default function Menu({items} : MenuProps) {
	
	return (
		<>
			<DesktopMenu items={items}/>
			<MobileMenu items={items}/>
		</>
	)
}

