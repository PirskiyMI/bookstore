import { FC } from 'react';

import { popularCategoryLinks } from '../constants/popularCategoryLinks';
import { usefulLinks } from '../constants/usefulLinks';

import { TheFooterColumn } from './TheFooterColumn';
import styles from './TheFooter.module.scss';

export const TheFooter: FC = () => {
   return (
      <div className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            <TheFooterColumn title="Popular books" list={popularCategoryLinks} />
            <TheFooterColumn title="Useful links" list={usefulLinks} />
         </div>
      </div>
   );
};
