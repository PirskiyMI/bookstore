import { FC } from 'react';

import { SearchInfo } from 'widgets/search/SearchInfo';
import { SearchList } from 'widgets/search/SearchList';

import styles from './SearchPage.module.scss';

export const SearchPage: FC = () => {
   return (
      <div className="container">
         <div className={styles.searchPage}>
            <SearchInfo />
            <SearchList />
         </div>
      </div>
   );
};
