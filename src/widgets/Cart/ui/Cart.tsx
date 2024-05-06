import { FC } from 'react';

import { useAppSelector } from 'shared/lib/hooks';
import { CartItem } from 'entities/CartItem';
import { cartTotalPriceSelector } from 'entities/Cart';
import { CartCounter } from 'features/cart/CartCounter';

import styles from './Cart.module.scss';
import { RemoveFromCart } from 'features/cart/RemoveFromCart';

export const Cart: FC = () => {
   const totalPrice = useAppSelector(cartTotalPriceSelector);

   return (
      <section className={styles.cart}>
         <ul className={styles.cart__list}>
            <li className={styles.cart__item}>
               <CartItem
                  ISBN13="9781484206485"
                  title="Practical MongoDB"
                  image="https://itbook.store/img/books/9781484206485.png"
                  price="32.04"
                  counter={<CartCounter ISBN="9781484206485" />}
                  deleteButton={<RemoveFromCart ISBN13="9781484206485" />}
               />
            </li>
         </ul>
         <div>Total: ${totalPrice}</div>
      </section>
   );
};
