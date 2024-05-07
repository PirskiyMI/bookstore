import { FC, memo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { cartActions, cartItemCountSelector } from 'entities/Cart';

import styles from './CartCounter.module.scss';

interface IProps {
   ISBN13: string;
}

export const CartCounter: FC<IProps> = memo(({ ISBN13 }) => {
   const count = useAppSelector((state) => cartItemCountSelector(state, ISBN13));
   const { incrementCount, decrementCount } = cartActions;
   const dispatch = useAppDispatch();

   const handleIncrement = useCallback(
      () => dispatch(incrementCount(ISBN13)),
      [ISBN13, dispatch, incrementCount],
   );
   const handleDecrement = useCallback(
      () => dispatch(decrementCount(ISBN13)),
      [ISBN13, decrementCount, dispatch],
   );

   return (
      <div className={styles.counter}>
         <button className={styles.counter__button} onClick={handleDecrement} disabled={count <= 1}>
            -
         </button>
         <span className={styles.counter__output}>{count}</span>
         <button className={styles.counter__button} onClick={handleIncrement}>
            +
         </button>
      </div>
   );
});
