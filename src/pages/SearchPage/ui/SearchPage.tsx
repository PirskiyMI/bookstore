import { FC } from 'react';

import { useInput } from 'shared/lib/hooks';
import { SearchInfo } from 'widgets/search/SearchInfo';
import { SearchList } from 'widgets/search/SearchList';

import styles from './SearchPage.module.scss';

export const SearchPage: FC = () => {
   const { value } = useInput();
   return (
      <div className="container">
         <div className={styles.searchPage}>
            <SearchInfo value={value} />
            <SearchList />
         </div>
      </div>
   );
};
