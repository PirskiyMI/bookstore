import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './BookPreview.module.scss';

export interface IProps {
   ISBN13: string;
   title: string;
   price: string;
   image: string;
   subtitle?: string;
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
            <img src={image} alt="Фото Товара" className={styles.bookPreview__image} />
            <div className={styles.bookPreview__text}>
               <div>
                  <h4 className={styles.bookPreview__title}>{title}</h4>
                  {subtitle && <p className={styles.bookPreview__subtitle}>{subtitle}</p>}
               </div>
               <p className={styles.bookPreview__price}>${price}</p>
            </div>
         </div>
         <div className={styles.bookPreview__popup}>
            <Link to={`/books/${ISBN13}`} state={{ title }}>
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
