import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { IBookPreview } from '../types';

import styles from './BookPreview.module.scss';

interface IProps extends IBookPreview {
   addToCartButton?: ReactNode;
}

export const BookPreview: FC<IProps> = ({
   title,
   subtitle,
   ISBN13,
   price,
   image,
   addToCartButton,
}) => {
   const isFree = price === '0.00';

   return (
      <article className={`${styles.bookPreview} ${isFree && styles.bookPreview_free}`} id={ISBN13}>
         <div className={styles.bookPreview__body}>
            <img
               rel="preload"
               fetchPriority="high"
               src={image}
               loading="lazy"
               alt={`Book cover for ${title}`}
               className={`${styles.bookPreview__image}`}
            />
            <div className={styles.bookPreview__text}>
               <Link to={`/books/${ISBN13}`} state={{ title }}>
                  <p className={styles.bookPreview__price}>${price}</p>
                  <div>
                     <h4 className={styles.bookPreview__title}>{title}</h4>
                     <p className={styles.bookPreview__subtitle}>{subtitle}</p>
                  </div>
               </Link>
               <div className={styles.bookPreview__button}>{addToCartButton}</div>
            </div>
         </div>
      </article>
   );
};
