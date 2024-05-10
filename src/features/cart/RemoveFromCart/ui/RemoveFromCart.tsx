import { FC, memo, useCallback } from 'react';

import { useAppDispatch } from 'shared/lib/hooks';
import { cartActions } from 'entities/Cart';

import styles from './RemoveFromCart.module.scss';
import { toast } from 'react-toastify';

interface IProps {
   ISBN13: string;
}

export const RemoveFromCart: FC<IProps> = memo(({ ISBN13 }) => {
   const { removeFromCart } = cartActions;
   const dispatch = useAppDispatch();

   const handleClick = useCallback(
      () => {
         dispatch(removeFromCart(ISBN13)),
         toast.error('Book removed from cart!')
      }, 
      [ISBN13, dispatch, removeFromCart],
   );

   return (
      <button className={styles.removeButton} onClick={handleClick}>
         <span className={styles.removeButton__span}>+</span>
      </button>
   );
});
