import { FC } from 'react'
import styles from './SearchPage.module.scss'
import { SearchInfo } from 'widgets/SearchInfo'
import { SearchList } from 'widgets/SearchList'
import { useInput } from 'shared/lib/hooks'

export const SearchPage:FC = () => {
  const {value} = useInput()
  return (
    <div className={styles.searchPage}>
      <SearchInfo value={value}/>
      <SearchList />
    </div>
  )
}