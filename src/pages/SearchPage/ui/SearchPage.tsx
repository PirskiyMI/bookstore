import { FC } from 'react';

import { SearchList } from 'widgets/SearchList';

import styles from './SearchPage.module.scss';

export const SearchPage: FC = () => {
   return (
      <div className={styles.searchPage}>
         <div className="container">
            <SearchList />
         </div>
      </div>
   );
};
