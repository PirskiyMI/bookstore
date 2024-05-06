import { FC } from 'react';

import { useAppDispatch } from 'shared/lib/hooks';
import { cartActions } from 'entities/Cart';

import styles from './RemoveFromCart.module.scss';

interface IProps {
   ISBN13: string;
}

export const RemoveFromCart: FC<IProps> = ({ ISBN13 }) => {
   const { removeFromCart } = cartActions;
   const dispatch = useAppDispatch();

   const handleClick = () => dispatch(removeFromCart(ISBN13));

   return (
      <button className={styles.removeButton} onClick={handleClick}>
         <span className={styles.removeButton__span}>+</span>
      </button>
   );
};
