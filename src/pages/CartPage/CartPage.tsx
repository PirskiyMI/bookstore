import { FC } from 'react';

import { Cart } from 'widgets/Cart';

import styles from './CartPage.module.scss';

export const CartPage: FC = () => {
   return (
      <div className={styles.cartPage}>
         <div className={`${styles.cartPage__container} container`}>
            <Cart />
         </div>
      </div>
   );
};
