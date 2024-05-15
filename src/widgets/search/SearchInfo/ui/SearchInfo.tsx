import { FC } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SearchInfo.module.scss';

export const SearchInfo: FC = () => {
   const { value } = useParams();

   return (
      <div className={styles.searchInfo}>
         <h2 className={styles.searchInfo__text}>
            You searched for : <span className={styles.searchInfo__text_span}>{value}</span>
         </h2>
      </div>
   );
};
