import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Title } from 'shared/ui/Title';

import { category } from '../constants/category';

import styles from './BooksCategory.module.scss';

export const BooksCategory: FC = () => {
   const categoryList = Object.entries(category);

   return (
      <div className={styles.booksCategory}>
         {categoryList.map(([title, categories]) => (
            <div>
               <Title>{title}</Title>
               <ul className={styles.booksCategory__list}>
                  {categories.map((el) => {
                     const path = `/search/${el}`;
                     return (
                        <li key={el}>
                           <Link to={path} className={styles.booksCategory__link}>
                              {el}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </div>
         ))}
      </div>
   );
};
