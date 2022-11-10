import styles from './Loader.module.scss'
import cn from 'classnames'

export default function Loader({ invert = false }: { invert?: boolean }) {
  return <img className={cn(styles.loader, invert && styles.invert)} src={'/images/loader.gif'} />
}