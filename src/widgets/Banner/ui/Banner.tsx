import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link, NavLink } from 'react-router-dom';

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
            pagination={{ clickable: true }}>
            {slides.map(({ imgURL, ISBN13, title}, index) => (
               <SwiperSlide key={index} className={styles.banner__item}>
                  <Link to={`/books/${ISBN13}`} className={styles.banner__link} state={title}>
                     <img src={imgURL} alt="" className={styles.banner__img} />
                  </Link>
               </SwiperSlide>
            ))}
            
            <SliderController />
         </Swiper>
      </div>
   );
};
