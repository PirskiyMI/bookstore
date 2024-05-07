import { FC } from 'react'
import styles from './AboutUsPage.module.scss'
import { AboutInfo } from 'widgets/AboutInfo'

export const AboutUsPage:FC = () => {
  return (
    <div className={styles.aboutUsPage}>
      <AboutInfo />
    </div>
  )
}
