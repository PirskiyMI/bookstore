import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import style from './TheFooterColumns.module.scss';

interface IProps {
   list: { title: string; path: string; isLink: boolean }[];
   title: string;
}

export const TheFooterColumn: FC<IProps> = ({ list, title }) => {
   return (
      <div className={style.footerColumn}>
         <h3 className={style.footerColumn__title}>{title}</h3>
         <ul className={style.footerColumn__list}>
            {list.map(({ path, title, isLink }) => (
               <li key={title} className={style.footerColumn__item}>
                  {isLink ? (
                     <NavLink to={path}>{title}</NavLink>
                  ) : (
                     <a href={path} target="_blank">
                        {title}
                     </a>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
};
