import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Routes } from 'shared/constants';
import { Logo } from 'shared/ui/Logo';
import { SearchForm } from 'features/SearchForm';

import styles from './TheHeaderDesktop.module.scss';
import { TheHeaderCartButton } from './TheHeaderCartButton';

export const TheHeaderDesktop: FC = memo(() => {
   return (
      <div className={styles.header}>
         <Link to={Routes.MAIN_PAGE}>
            <Logo />
         </Link>
         <TheHeaderSearch />
         <div className={styles.header__cart}>
            <div className={styles.header__button}>
               <TheHeaderCartButton />
            </div>
         </div>
      </div>
   );
});

const TheHeaderSearch: FC = memo(() => {
   return (
      <div className={styles.header__search}>
         <SearchForm />
      </div>
   );
});
