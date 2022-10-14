import styles from './Loader.module.scss'

export default function Loader(props){
  return <img className={styles.spinner} src={'/images/logo.svg'} />
}