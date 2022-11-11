import styles from './Loader.module.scss'

export default function Loader({ invert = false }: { invert?: boolean }) {
  return <img className={styles.loader} src={`/images/loader${invert ? '_black' : ''}.gif`} />
}