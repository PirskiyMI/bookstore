import { FC, memo } from 'react';

import { ICartItemPreview } from '../../types';

import styles from './CartPreviewItem.module.scss';

export const CartPreviewItem: FC<ICartItemPreview> = memo(({ title, price, image, count }) => {
   return (
      <article className={styles.cartPreviewItem}>
         <img src={image} alt="" className={styles.cartPreviewItem__image} />
         <div className={styles.cartPreviewItem__content}>
            <h4 className={styles.cartPreviewItem__title}>{title}</h4>
            <div className={styles.cartPreviewItem__text}>
               <span>{count}x</span>
               <span className={styles.cartPreviewItem__price}>${price}</span>
            </div>
         </div>
      </article>
   );
});
