import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import ArrowIcon from 'shared/assets/icons/arrow.svg?react';

import { slides } from '../constants';

import styles from './Banner.module.scss';

export const Banner: FC = () => {
   return (
      <div className={styles.banner}>
         <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            onSlideChange={() => console.log()}
            onSwiper={() => console.log()}
            navigation={false}
            pagination={{ clickable: true }}>
            {slides.map(({ imgURL }, index) => (
               <SwiperSlide key={index} className={styles.banner__item}>
                  <NavLink to={''}>
                     <img src={imgURL} alt="" className={styles.banner__img} />
                  </NavLink>
               </SwiperSlide>
            ))}
            <BannerNavigation />
         </Swiper>
      </div>
   );
};

const BannerNavigation: FC = () => {
   const swiper = useSwiper();

   const handleToPrevSlide = () => swiper.slidePrev();
   const handleToNextSlide = () => swiper.slideNext();

   return (
      <>
         <button
            onClick={handleToPrevSlide}
            className={`${styles.banner__navigation} ${styles.banner__navigation_prev}`}>
            <ArrowIcon className={styles.banner__arrow}/>
         </button>
         <button
            onClick={handleToNextSlide}
            className={`${styles.banner__navigation} ${styles.banner__navigation_next}`}>
            <ArrowIcon className={styles.banner__arrow}/>
         </button>
      </>
   );
};
