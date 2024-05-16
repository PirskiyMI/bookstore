import { FC } from 'react';

import { listNavBook } from '../constants/listNavBook';
import { listNavInfo } from '../constants/listNavInfo';

import { TheFooterColumns } from './TheFooterColumns';
import styles from './TheFooter.module.scss';

export const TheFooter: FC = () => {
   return (
      <div className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            <TheFooterColumns title="Popular books" list={listNavBook} />
            <TheFooterColumns title="Useful links" list={listNavInfo} />
         </div>
      </div>
   );
};
