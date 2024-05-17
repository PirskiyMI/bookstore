import { FC, memo } from 'react';

import styles from './Logo.module.scss';

export const Logo: FC = memo(() => {
   return <div className={styles.logo}>Bookstore</div>;
});
