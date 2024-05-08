import { FC } from 'react';

import { useAppSelector } from 'shared/lib/hooks';
import { CartItem } from 'entities/CartItem';
import { cartListSelector, cartTotalPriceSelector } from 'entities/Cart';
import { CartCounter } from 'features/cart/CartCounter';
import { RemoveFromCart } from 'features/cart/RemoveFromCart';

import styles from './Cart.module.scss';

export const Cart: FC = () => {
   const cartItemList = useAppSelector(cartListSelector);
   const totalPrice = useAppSelector(cartTotalPriceSelector);

   const cartList = (
      <ul className={styles.cart__list}>
         {cartItemList.map(([ISBN13, el]) => (
            <li key={ISBN13} className={styles.cart__item}>
               <CartItem
                  ISBN13={ISBN13}
                  {...el}
                  counter={<CartCounter ISBN13={ISBN13} />}
                  deleteButton={<RemoveFromCart ISBN13={ISBN13} />}
               />
            </li>
         ))}
      </ul>
   );

   return (
      <section className={styles.cart}>
         {!cartItemList.length ? (
            <div>Cart is empty</div>
         ) : (
            <>
               <h2 className={styles.cart__title}>Products</h2>
               {cartList}
               <div className={styles.cart__footer}>
                  Total: <span className={styles.cart__total}>${totalPrice}</span>
               </div>
            </>
         )}
      </section>
   );
};
