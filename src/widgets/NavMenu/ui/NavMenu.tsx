import { FC } from 'react';

import styles from './NevMenu.module.scss';
import { NavList } from './NavList';

export const NavMenu: FC = () => {
   return (
      <nav className={`${styles.nav} ${styles.nav_active}`}>
         <div className={`container`}>
            <NavList />
         </div>
      </nav>
   );
};
