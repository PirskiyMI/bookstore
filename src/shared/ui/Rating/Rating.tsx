import { FC, useMemo } from 'react';

import StarIcon from '../../assets/icons/star-icon.svg?react';

import styles from './Rating.module.scss';

interface IProps {
   rating: string;
}

export const Rating: FC<IProps> = ({ rating }) => {
   const ratingList = useMemo(() => ['1', '2', '3', '4', '5'], []);

   return (
      <div className={styles.rating}>
         {ratingList.map((el) => {
            const classes =
               el <= rating
                  ? `${styles.rating__icon} ${styles.rating__icon_active}`
                  : styles.rating__icon;

            return (
               <div>
                  <StarIcon className={classes} />
               </div>
            );
         })}
      </div>
   );
};
