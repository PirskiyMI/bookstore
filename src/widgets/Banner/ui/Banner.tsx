import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { slides } from '../constants';

import styles from './Banner.module.scss';
import { SliderController } from 'shared/ui/SliderController';

export const Banner: FC = () => {
   return (
      <div className={styles.banner}>
         <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            className={styles.banner__slider}>
            {slides.map(({ imgURL }, index) => (
               <SwiperSlide key={index} className={styles.banner__item}>
                  <NavLink to={''} className={styles.banner__link}>
                     <img src={imgURL} alt="" className={styles.banner__img} />
                  </NavLink>
               </SwiperSlide>
            ))}
            <SliderController />
         </Swiper>
      </div>
   );
};
