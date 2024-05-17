import { FC } from 'react';

import { popularCategoryLinks } from '../constants/popularCategoryLinks';
import { usefulLinks } from '../constants/usefulLinks';

import { TheFooterColumns } from './TheFooterColumns';
import styles from './TheFooter.module.scss';

export const TheFooter: FC = () => {
   return (
      <div className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            <TheFooterColumns title="Popular books" list={popularCategoryLinks} />
            <TheFooterColumns title="Useful links" list={usefulLinks} />
         </div>
      </div>
   );
};
