import { FC } from 'react';
import { BooksCategory } from 'widgets/BooksCategory';

import styles from './AllBooksPage.module.scss';

export const AllBooksPage: FC = () => {
   return (
      <div className="container">
         <div className={styles.allBooks}>
            <BooksCategory />
         </div>
      </div>
   );
};
