import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavList.module.scss';
import { linkList } from '../constants/linkList';

export const NavList: FC = () => {
   return (
      <ul className={styles.list}>
         {linkList.map(({ title, path }) => (
            <li className={styles.list__item} key={title}>
               <Link to={path} className={styles.list__link}>
                  {title}
               </Link>
            </li>
         ))}
      </ul>
   );
};
