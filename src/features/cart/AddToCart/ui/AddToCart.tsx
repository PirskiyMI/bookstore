import { FC } from 'react';

import { useAppDispatch } from 'shared/lib/hooks';
import { MyButton } from 'shared/ui/MyButton';
import CartIcon from 'shared/assets/icons/cart-icon.svg?react';
import { cartActions } from 'entities/Cart';

import styles from './AddToCart.module.scss';

interface IProps {
   ISBN13: string;
   data: { title: string; image: string; price: string; count: number };
}

export const AddToCart: FC<IProps> = (props) => {
   const { addToCart } = cartActions;
   const dispatch = useAppDispatch();

   const handleAddToCart = () => dispatch(addToCart(props));

   return (
      <MyButton
         className={styles.button}
         onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
         }}>
         <div className={styles.button__wrapper}>
            <CartIcon className={styles.button__icon} />
            <span>Add to Cart</span>
         </div>
      </MyButton>
   );
};
