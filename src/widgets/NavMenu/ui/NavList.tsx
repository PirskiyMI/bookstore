import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './NavList.module.scss';
import { Routes } from 'shared/constants';

export const NavList: FC = () => {

   const {pathname} = useLocation()

   const isLinlActive = ({pathname, to}:{pathname:string, to:string}) => {
      const isActive = pathname === to
      const classes = isActive ? `${styles.list__link} ${styles.list__link_active}` : styles.list__link;
      return classes
   }

   return (
      <ul className={styles.list}>
         <li className={styles.list__item}>
            <Link to={Routes.MAIN_PAGE} className={isLinlActive({pathname, to:Routes.MAIN_PAGE})}>
               New
            </Link>
         </li>
         <li className={styles.list__item}>
            <Link to={Routes.CATEGORY_PAGE} className={isLinlActive({pathname, to:Routes.CATEGORY_PAGE})}>
               All books
            </Link>
         </li>
      </ul>
   );
};
