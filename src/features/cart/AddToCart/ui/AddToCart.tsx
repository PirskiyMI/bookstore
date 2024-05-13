import { FC } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { MyButton } from 'shared/ui/MyButton';
import CartIcon from 'shared/assets/icons/cart-icon.svg?react';
import { cartActions, isBookInCartSelector } from 'entities/Cart';

import styles from './AddToCart.module.scss';

interface IProps {
   ISBN13: string;
   data: { title: string; image: string; price: string; count: number };
}

export const AddToCart: FC<IProps> = (props) => {
   const { addToCart } = cartActions;
   const inCart = useAppSelector((state) => isBookInCartSelector(state, props.ISBN13));
   const dispatch = useAppDispatch();

   const handleAddToCart = () => {
      dispatch(addToCart(props));
      toast.success('Book added to cart!');
   };

   if (inCart)
      return (
         <MyButton className={styles.button_added}>
            <div className={styles.button__wrapper}>
               <CartIcon className={styles.button__icon} />
               <span>Added to cart</span>
            </div>
         </MyButton>
      );

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
