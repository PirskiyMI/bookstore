import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './NevMenu.module.scss';

export const NavMenu: FC = () => {
   return (
      <nav className={styles.nav}>
         <div className={`${styles.nav__container} container`}>
            <NavList />
         </div>
      </nav>
   );
};

const NavList: FC = () => {
   return (
      <ul className={styles.nav__list}>
         <li className={styles.nav__item}>
            <Link to="#" className={styles.nav__link}>
               New
            </Link>
         </li>
         <li className={styles.nav__item}>
            <Link to="#" className={styles.nav__link}>
               TypeScript
            </Link>
         </li>
      </ul>
   );
};
