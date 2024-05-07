import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'shared/lib/hooks';
import { Routes } from 'shared/constants';
import { MyButton } from 'shared/ui/MyButton';
import CartIcon from 'shared/assets/icons/cart-icon.svg?react';
import { cartTotalCountSelector } from 'entities/Cart';

import styles from './TheHeaderCartButton.module.scss';

export const TheHeaderCartButton: FC = () => {
   const totalCount = useAppSelector(cartTotalCountSelector);

   return (
      <Link to={Routes.CART_PAGE}>
         <MyButton className={styles.cartButton}>
            <div className={styles.cartButton__wrapper}>
               <CartIcon className={styles.cartButton__icon} />
               <span className={styles.cartButton__count}>{totalCount}</span>
            </div>
         </MyButton>
      </Link>
   );
};
