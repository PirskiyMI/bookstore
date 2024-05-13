import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import ErrorIcon from 'shared/assets/icons/error-icon.svg?react';
import { Routes } from 'shared/constants';

import styles from './Fallback.module.scss';

export const Fallback: FC = () => {
   return (
      <div className={styles.fallback}>
         <ErrorIcon className={styles.fallback__image} />
         <div className={styles.fallback__body}>
            <h2 className={styles.fallback__title}>Something went wrong</h2>
            <NavLink to={Routes.MAIN_PAGE} className={styles.fallback__link}>
               Return to main page
            </NavLink>
         </div>
      </div>
   );
};
