import { FC } from 'react'
import styles from './TheFooter.module.scss'
import { TheFooterColumns } from './TheFooterColumns'
import { listNavBook, listNavInfo } from '../constants'


export const TheFooter: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <TheFooterColumns title='Popular books' list={listNavBook}/>
        <TheFooterColumns title='Useful links' list={listNavInfo}/>
      </div>
    </div>
  )
}
