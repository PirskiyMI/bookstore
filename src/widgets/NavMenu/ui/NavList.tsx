import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { isActive } from 'shared/lib/helpers';
import { Routes } from 'shared/constants';

import { categories } from '../constants/categories';

import styles from './NavList.module.scss';

export const NavList: FC = () => {
   const { pathname } = useLocation();
   const classNames = {
      className: styles.list__link,
      classNameActive: styles.list__link_active,
   };

   const categoryList = categories.map((el) => {
      const to = `/search/${el}`;

      return (
         <li key={el} className={styles.list__item}>
            <Link
               to={to}
               className={isActive({
                  pathname,
                  to,
                  classNames,
               })}>
               {el}
            </Link>
         </li>
      );
   });

   return (
      <ul className={styles.list}>
         <li className={styles.list__item}>
            <Link
               to={Routes.MAIN_PAGE}
               className={isActive({
                  pathname,
                  classNames,
                  to: Routes.MAIN_PAGE,
               })}>
               New
            </Link>
         </li>
         {categoryList}
         <li className={styles.list__item}>
            <Link
               to={Routes.CATEGORY_PAGE}
               className={isActive({
                  pathname,
                  classNames,
                  to: Routes.CATEGORY_PAGE,
               })}>
               All books
            </Link>
         </li>
      </ul>
   );
};
