import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './BookPreview.module.scss';

export interface IProps {
   ISBN13: string;
   title: string;
   subtitle: string;
   price: string;
   image: string;
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
         <div>
            <Link to={`/books/${ISBN13}`}>
               <img src={image} alt="Фото Товара" className={styles.bookPreview__image} />
               <h4 className={styles.bookPreview__title}>{title}</h4>
               <p className={styles.bookPreview__subtitle}>{subtitle}</p>
               <p className={styles.bookPreview__price}>${price}</p>
            </Link>
         </div>
         <div className={styles.bookPreview__popup}>
            <Link to={`/books/${ISBN13}`}>
               <p className={styles.bookPreview__price}>${price}</p>
               <div>
                  <h4 className={styles.bookPreview__title}>{title}</h4>
                  <p className={styles.bookPreview__subtitle}>{subtitle}</p>
               </div>
            </Link>
            <div className={styles.bookPreview__button}>{addToCartButton}</div>
         </div>
      </article>
   );
};
