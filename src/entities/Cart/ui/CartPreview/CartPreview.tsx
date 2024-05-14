import { FC } from 'react';

import { MyButton } from 'shared/ui/MyButton/MyButton';
import { useAppSelector } from 'shared/lib/hooks';
import { cartTotalPriceSelector } from 'entities/Cart';

import { cartPreviewListSelector } from './../../model/cartSelectors';

import styles from './CartPreview.module.scss';
import { CartPreviewItem } from '../CartPreviewItem/CartPreviewItem';
import { NavLink } from 'react-router-dom';

export const CartPreview: FC = () => {
   const previewList = useAppSelector(cartPreviewListSelector);
   const totalPrice = useAppSelector(cartTotalPriceSelector);

   const cartPreviewList = (
      <ul className={styles.cartList}>
         {previewList.map(([ISBN13, el]) => (
            <li key={ISBN13} className={styles.cartList__item}>
               <NavLink to={`/books/${ISBN13}`}>
                  <CartPreviewItem {...el} />
               </NavLink>
            </li>
         ))}
      </ul>
   );

   return (
      <div className={styles.cartPreview}>
         <div className={styles.cartPreview__wrapper}>
            <div className={`${styles.cartPreview__part} ${styles.cartPreview__part_header}`}>
               {cartPreviewList}
            </div>
            <div className={styles.cartPreview__part}>Subtotal: ${totalPrice}</div>
            <div className={styles.cartPreview__part}>
               <NavLink to={'/cart'}>
                  <MyButton>View Cart</MyButton>
               </NavLink>
            </div>
         </div>
      </div>
   );
};
