import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../../assets/icons/home-icon.svg?react';

import styles from './BredCrumbs.module.scss';

export const BredCrumbs: FC = () => {
   const location = useLocation();
   const { pathname } = location;

   let path = '';

   const crumbs = pathname.split('/').map((el, index, array) => {
      path += `/${el}`;

      return (
         <li key={path} className={styles.crumbs__item}>
            <Link to={path} className={styles.crumbs__link}>
               {el ? el : 'Home'}
            </Link>
            {array.length - 1 !== index && <div className={styles.crumbs__arrow} />}
         </li>
      );
   });

   return (
      <ul className={styles.crumbs}>
         <li className={styles.crumbs__icon}>
            <HomeIcon />
         </li>
         {crumbs}
      </ul>
   );
};
