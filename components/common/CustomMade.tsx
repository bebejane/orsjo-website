import s from './CustomMade.module.scss'

export type Props = {
  show?: boolean
}

export default function CustomMade({ show }: Props) {
  if (!show) return null
  return (
    <div className={s.container}>
      Custom
      <br />
      made
    </div>
  )
}
