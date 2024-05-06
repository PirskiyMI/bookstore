import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { slide } from '../constants';

import styles from './Banner.module.scss'

export const Banner:FC = () => {
  return (
    <Swiper 
      className={styles.banner}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{delay: 2500,}}
      onSlideChange={() => console.log()}
      onSwiper={() => console.log()}
      navigation
      pagination={{ clickable: true }}
    >
      {
        slide.map(({imgURL}, index)=>(
          <SwiperSlide key={index} className={styles.banner__item} >
            <NavLink to={''}>
              <img src={imgURL} alt="" className={styles.banner__item__img}/>
            </NavLink>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
