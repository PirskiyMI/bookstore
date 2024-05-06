import { FC } from 'react';

import { useAppSelector } from 'shared/lib/hooks';
import { CartItem } from 'entities/CartItem';
import { cartTotalPriceSelector } from 'entities/Cart';

import styles from './Cart.module.scss';

export const Cart: FC = () => {
   const totalPrice = useAppSelector(cartTotalPriceSelector);

   console.log(totalPrice);

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
