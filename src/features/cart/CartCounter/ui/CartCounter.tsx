import { FC } from 'react';

import styles from './CartCounter.module.scss';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { cartActions, cartItemCountSelector } from 'entities/Cart';

interface IProps {
   ISBN: string;
}

export const CartCounter: FC<IProps> = ({ ISBN }) => {
   const count = useAppSelector((state) => cartItemCountSelector(state, ISBN));
   const { incrementCount, decrementCount } = cartActions;
   const dispatch = useAppDispatch();

   const handleIncrement = () => dispatch(incrementCount(ISBN));
   const handleDecrement = () => dispatch(decrementCount(ISBN));

   return (
      <div className={styles.counter}>
         <button className={styles.counter__button} onClick={handleDecrement} disabled={count <= 0}>
            -
         </button>
         <span className={styles.counter__output}>{count}</span>
         <button className={styles.counter__button} onClick={handleIncrement}>
            +
         </button>
      </div>
   );
};
