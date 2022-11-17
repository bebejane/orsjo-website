import styles from './Underlay.module.scss'
import cn from 'classnames'
import useStore from '/lib/store'

export default function Underlay(props) {
  const [showSiteSearch, showSubMenu] = useStore((state) => [state.showSiteSearch, state.showSubMenu])
  return <div className={cn(styles.underlay, (showSiteSearch || showSubMenu) && styles.show)}></div>
}
