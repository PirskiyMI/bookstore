import { FC } from 'react';

import styles from './Cart.module.scss';
import { CartItem } from 'entities/CartItem/ui/CartItem';

export const Cart: FC = () => {
   return (
      <section className={styles.cart}>
         <ul className={styles.cart__list}>
            <li className={styles.cart__item}>
               <CartItem
                  ISBN13="9781484206485"
                  title="Practical MongoDB"
                  image="https://itbook.store/img/books/9781484206485.png"
                  price="$32.04"
                  counter={'counter'}
                  deleteButton={'deleteButton'}
               />
            </li>
         </ul>
      </section>
   );
};
