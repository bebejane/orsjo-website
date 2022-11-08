import styles from './Loader.module.scss'

export default function Loader() {
  return <img className={styles.loader} src={'/images/loader.gif'} />
}