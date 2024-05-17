import { FC, useCallback } from 'react';
import { useSwiper } from 'swiper/react';

import ArrowIcon from '../../assets/icons/arrow.svg?react';

import styles from './SliderController.module.scss';

interface IProps {
   theme?: 'main' | 'alternative';
   indentation?: number;
}

export const SliderController: FC<IProps> = ({ theme = 'main', indentation = 0 }) => {
   const swiper = useSwiper();
   const arrowClasses =
      theme === 'alternative'
         ? `${styles.controller__arrow} ${styles.controller__arrow_alternative}`
         : styles.controller__arrow;

   const handleToPrevSlide = useCallback(() => {
      swiper.slidePrev();
   }, [swiper]);
   const handleToNextSlide = useCallback(() => {
      swiper.slideNext();
   }, [swiper]);

   return (
      <>
         <button
            style={{ left: `${indentation}px` }}
            onClick={handleToPrevSlide}
            aria-label='to previous slide'
            className={`${styles.controller} ${styles.controller_prev}`}>
            <ArrowIcon className={arrowClasses} />
         </button>
         <button
            style={{ right: `${indentation}px` }}
            onClick={handleToNextSlide}
            aria-label='to next slide'
            className={`${styles.controller} ${styles.controller_next}`}>
            <ArrowIcon className={arrowClasses} />
         </button>
      </>
   );
};
