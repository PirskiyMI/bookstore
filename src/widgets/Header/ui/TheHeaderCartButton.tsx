import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'shared/lib/hooks';
import { Routes } from 'shared/constants';
import { MyButton } from 'shared/ui/MyButton';
import CartIcon from 'shared/assets/icons/cart-icon.svg?react';
import { CartPreview, cartTotalCountSelector } from 'entities/Cart';

import styles from './TheHeaderCartButton.module.scss';

export const TheHeaderCartButton: FC = memo(() => {
   const totalCount = useAppSelector(cartTotalCountSelector);

   return (
      <div className={styles.cartButton}>
         <Link to={Routes.CART_PAGE}>
            <MyButton>
               <div className={styles.cartButton__wrapper}>
                  <CartIcon className={styles.cartButton__icon} />
                  <span className={styles.cartButton__count}>{totalCount}</span>
               </div>
            </MyButton>
         </Link>
         <div className={styles.cartButton__dropdown}>
            <CartPreview />
         </div>
      </div>
   );
});
