import { FC } from 'react';

import { Cart } from 'widgets/Cart';

import styles from './CartPage.module.scss';

export const CartPage: FC = () => {
   return (
      <div className='container'>
         <div className={styles.cartPage}>
            <Cart />
         </div>
      </div>
   );
};
