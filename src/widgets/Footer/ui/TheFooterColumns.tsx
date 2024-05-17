import { FC } from 'react';
import style from './TheFooterColumns.module.scss';
import { NavLink } from 'react-router-dom';

interface IProps {
   list: { title: string; path: string; isLink: boolean }[];
   title: string;
}

export const TheFooterColumns: FC<IProps> = ({ list, title }) => {
   return (
      <div className={style.footerColumns}>
         <h5 className={style.footerColumns__title}>{title}</h5>
         <ul className={style.footerColumns__list}>
            {list.map(({ path, title, isLink }) => (
               <li key={title} className={style.footerColumns__item}>
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
