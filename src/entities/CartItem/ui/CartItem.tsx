import { FC, ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './CartItem.module.scss';

interface IProps {
   ISBN13: string;
   title: string;
   image: string;
   price: string;
   counter: ReactNode;
   deleteButton: ReactNode;
}

export const CartItem: FC<IProps> = memo(
   ({ ISBN13, title, image, price, counter, deleteButton }) => {
      return (
         <article className={styles.cartItem}>
            <Link to={`/books/${ISBN13}`} state={title} className={styles.cartItem__preview}>
               <img
                  src={image}
                  loading="lazy"
                  alt={`book cover for ${title}`}
                  className={styles.cartItem__image}
               />
               <h3 className={styles.cartItem__title}>{title}</h3>
            </Link>
            <div className={styles.cartItem__body}>
               <div className={styles.cartItem__price}>${price}</div>
               <div className={styles.cartItem__controls}>
                  <div className={styles.cartItem__counter}>{counter}</div>
                  <div className={styles.cartItem__delete}>{deleteButton}</div>
               </div>
            </div>
         </article>
      );
   },
);
