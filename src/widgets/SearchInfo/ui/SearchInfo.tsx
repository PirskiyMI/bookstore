import { FC } from 'react'
import styles from './SearchInfo.module.scss'

interface IProps {
    value: string
}

export const SearchInfo:FC<IProps> = ({value}) => {
  return (
    <div className={styles.searchInfo}>
      <h2 className={styles.searchInfo__text}>You searched for : <span className={styles.searchInfo__text_span}>{value}</span></h2>
    </div>
  )
}