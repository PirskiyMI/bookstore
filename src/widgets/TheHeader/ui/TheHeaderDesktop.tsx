import { Link } from 'react-router-dom';
import { FC } from 'react';

import { Routes } from 'shared/constants';
import { Logo } from 'shared/ui/Logo';

import styles from './TheHeaderDesktop.module.scss';
import { TheHeaderCartButton } from './TheHeaderCartButton';
import { SearchForm } from 'features/SearchForm';

export const TheHeaderDesktop: FC = () => {
   return (
      <div className={`${styles.header__container} container`}>
         <Link to={Routes.MAIN_PAGE}>
            <Logo />
         </Link>
         <div className={styles.header__search}>
            <SearchForm />
         </div>
         <div className={styles.header__cart}>
            <div className={styles.header__button}>
               <TheHeaderCartButton />
            </div>
         </div>
      </div>
   );
};
