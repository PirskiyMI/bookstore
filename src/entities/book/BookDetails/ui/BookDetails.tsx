import { FC, ReactNode } from 'react';

import { Rating } from 'shared/ui/Rating';

import styles from './BookDetails.module.scss';
import { NavLink } from 'react-router-dom';

export interface IPublicationInformation {
   publisher: string;
   published: string;
   pages: string;
   ISBN10: string;
   ISBN13: string;
}

export interface IBookDetails {
   title: string;
   subtitle: string;
   authors: string;
   rating: string;
   price: string;
   image: string;
}

interface IProps extends IBookDetails {
   publication: IPublicationInformation;
   addToCartButton: ReactNode;
}

export const BookDetails: FC<IProps> = ({
   title,
   subtitle,
   rating,
   authors,
   image,
   price,
   publication,
   addToCartButton,
}) => {
   const authorsList = authors.split(', ');
   const publicationInfo = Object.entries(publication);

   return (
      <article className={styles.book}>
         <img src={image} alt={`book cover for ${title}`} className={styles.book__image} />
         <div className={styles.book__body}>
            <div className={styles.book__block}>
               <div>
                  <div className={styles.book__rating}>
                     <Rating rating={rating} />
                  </div>
                  <h2 className={styles.book__title}>{title}</h2>
                  <h3 className={styles.book__subtitle}>{subtitle}</h3>
               </div>
               <ul className={styles.book__authors}>
                  {authorsList.map((el) => (
                     <li key={el}>
                        <NavLink to={`/search/${el}`}>{el}</NavLink>
                     </li>
                  ))}
               </ul>
            </div>

            <ul>
               {publicationInfo.map((el) => (
                  <li key={el[1]} className={styles.book__info}>
                     {el[0]}: {el[1]}
                  </li>
               ))}
            </ul>

            <div className={styles.book__price}>
               Price: <span className={styles.book__value}>${price}</span>{' '}
            </div>

            <div className={styles.book__button}>{addToCartButton}</div>
         </div>
      </article>
   );
};
