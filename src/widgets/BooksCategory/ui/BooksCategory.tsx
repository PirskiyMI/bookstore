import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Title } from 'shared/ui/Title'
import { category } from '../constants/category'

import styles from './BooksCategory.module.scss'
import { Routes } from 'shared/constants'

export const BooksCategory: FC = () => {

  const categoryList = Object.entries(category)

  return (
    <div className={styles.booksCategory}>
      {
        categoryList.map(([title, categories]) => (
          <div>
            <Title>
              {title}
            </Title>
            <div className={styles.list__link}>
              {categories.map(el => {
                const path = `${Routes.CATEGORY_PAGE}/${el}`
                return <Link to={path} className={styles.link__item}>
                  {el}
                </Link>
              }
              )}
            </div>
          </div>
        ))
      }
    </div>
  )
}
