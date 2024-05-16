import { FC } from 'react';

import { useAppSelector } from 'shared/lib/hooks';
import { isNavMenuOpenSelector } from 'shared/model/selectors';

import styles from './NavMenu.module.scss';
import { NavList } from './NavList';

export const NavMenu: FC = () => {
   const isMenuOpen = useAppSelector(isNavMenuOpenSelector);
   const classes = isMenuOpen ? `${styles.nav} ${styles.nav_active}` : styles.nav;

   return (
      <nav className={classes}>
         <div className={`container`}>
            <NavList />
         </div>
      </nav>
   );
};
