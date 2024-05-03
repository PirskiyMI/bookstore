import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './BookAuthor.module.scss';
import ArrowIcon from '../assets/arrow-icon.svg?react';

import authorImage from './../assets/author-image.png';

interface IProps {
   author: string;
}

export const BookAuthor: FC<IProps> = ({ author }) => {
   const searchValue = author.split(' ')[1];

   return (
      <article className={styles.author}>
         <h2 className={styles.author__title}>Author</h2>
         <div className={styles.author__body}>
            <div className={styles.author__avatar}>
               <img src={authorImage} alt="Author's default" className={styles.author__image} />
            </div>
            <h3 className={styles.author__name}>{author}</h3>
         </div>
         <Link to={`/search/${searchValue}`} className={styles.author__link}>
            Read more
            <ArrowIcon className={styles.author__arrow} />
         </Link>
      </article>
   );
};
