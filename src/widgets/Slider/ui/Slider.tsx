import { ProductCard } from 'entities/ProductCard'
import { Data } from 'entities/ProductCard/proverochniyFile.data'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { MyButton } from 'shared/ui/MyButton'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react'

import styles from './Slider.module.scss'

import 'swiper/scss';


interface IProps {
    title: string,
    path: string,
    // product: [],
}

// Слайдер с продуктами + с навигацией по разделам приложения 

export const Slider: FC<IProps> = ({ title, path }) => {

    return (
        <div className={styles.slider}>
            <div className={styles.slider__info}>
                <h2 className={styles.slider__info__title}>{title}</h2>
                <NavLink to={path}>
                    <MyButton>SEE MORE</MyButton>
                </NavLink>
            </div>
            <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                navigation 
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    }
                }}
            >
                {/*Удалить с проекта файл proverochnyFile и замапить слайды*/}
                <div className={styles.slider__wrapper}>
                    <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard ISBN13={Data.isbn13} image={Data.image} price={Data.price} subtitle={Data.subtitle} title={Data.title} />
                </SwiperSlide>
                </div>
                

            </Swiper>
        </div>
    )
}
