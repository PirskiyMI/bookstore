import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';

export interface IProps {
   title: string;
   subtitle: string;
   ISBN13: string;
   price: string;
   image: string;
   addToCartButton?: ReactNode;
}

export const ProductCard: FC<IProps> = ({
   title,
   subtitle,
   ISBN13,
   price,
   image,
   addToCartButton,
}) => {
   return (
      <article className={styles.productCard} id={ISBN13}>
         <div>
            <Link to={`/books/${ISBN13}`}>
               <img src={image} alt="Фото Товара" className={styles.productCard__image} />
               <h4 className={styles.productCard__title}>{title}</h4>
               <p className={styles.productCard__subtitle}>{subtitle}</p>
               <p className={styles.productCard__price}>{price}</p>
            </Link>
         </div>
         <div className={styles.productCard__popup}>
            <Link to={`/books/${ISBN13}`}>
               <p className={styles.productCard__price}>${price}</p>
               <div>
                  <h4 className={styles.productCard__title}>{title}</h4>
                  <p className={styles.productCard__subtitle}>{subtitle}</p>
               </div>
            </Link>
            <div className={styles.productCard__button}>{addToCartButton}</div>
         </div>
      </article>
   );
};
