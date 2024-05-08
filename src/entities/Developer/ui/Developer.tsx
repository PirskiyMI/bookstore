import { FC } from 'react';

import { ISocial } from '../lib/types/social';

import styles from './Developer.module.scss';

export interface IProps {
   id: number;
   name: string;
   surname: string;
   img: string;
   job: string;
   socials: ISocial[];
}

export const Developer: FC<IProps> = ({ img, name, surname, job, socials }) => {
   const socialList = (
      <ul className={styles.socialList}>
         {socials.map(({ title, url, isMail = false, icon }) => (
            <li key={url} className={styles.socialList__item}>
               {isMail ? (
                  <a href={`mailto:${url}`} className={styles.socialList__link}>
                     <div className={styles.socialList__icon}>{icon}</div>
                     {title}
                  </a>
               ) : (
                  <a href={url} target="_blank" className={styles.socialList__link}>
                     <div className={styles.socialList__icon}>{icon}</div>
                     {title}
                  </a>
               )}
            </li>
         ))}
      </ul>
   );

   return (
      <article className={styles.developer}>
         <div className={styles.developer__image}>
            <img
               src={img}
               alt={`Photo of ${name} ${surname}`}
               className={styles.developer__photo}
            />
         </div>

         <div className={styles.developer__info}>
            <h2 className={styles.developer__title}>
               <span className={styles.developer__name}>
                  {name} {surname}
               </span>
               <span>{job}</span>
            </h2>
            <div className={styles.developer__line} />
            {socialList}
         </div>
      </article>
   );
};
