import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { SliderController } from 'shared/ui/SliderController';

import { slides } from '../constants/slides';

import styles from './Banner.module.scss';

export const Banner: FC = () => {
   const swiperConfigs: SwiperOptions = useMemo(
      () => ({
         modules: [Navigation, Pagination, Autoplay],
         autoplay: { delay: 4000 },
         navigation: false,
         pagination: { clickable: true },
      }),
      [],
   );
   const slideList: JSX.Element = (
      <>
         {slides.map(({ imgURL, ISBN13, title }, index) => (
            <SwiperSlide key={index} className={styles.banner__item}>
               <Link to={`/books/${ISBN13}`} className={styles.banner__link} state={title}>
                  <img src={imgURL} alt="" className={styles.banner__img} />
               </Link>
            </SwiperSlide>
         ))}
      </>
   );

   return (
      <div className={styles.banner}>
         <Swiper {...swiperConfigs}>
            {slideList}
            <SliderController />
         </Swiper>
      </div>
   );
};
