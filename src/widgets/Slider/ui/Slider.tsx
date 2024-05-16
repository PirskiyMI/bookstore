import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import { Preloader } from 'shared/ui/Preloader';
import { Title } from 'shared/ui/Title';
import { MyButton } from 'shared/ui/MyButton';
import { SliderController } from 'shared/ui/SliderController';
import { BookPreview, IBookPreview } from 'entities/book/BookPreview';
import { AddToCart } from 'features/cart/AddToCart';

import { fetchBookList } from '../api/fetchBookList';

import styles from './Slider.module.scss';

interface IProps {
   title: string;
}

export const Slider: FC<IProps> = ({ title }) => {
   const [bookList, setBookList] = useState<IBookPreview[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      const fetchBooks = async () => {
         try {
            setIsLoading(true);
            setBookList([...(await fetchBookList(title))]);
         } catch (error) {
            setIsError(true);
         } finally {
            setIsLoading(false);
         }
      };
      fetchBooks();
   }, [title]);

   const breakpoints = {
      320: {
         slidesPerView: 1,
      },
      560: {
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
      },
   };

   if (isLoading)
      return (
         <section className={styles.preloader}>
            <Preloader />
         </section>
      );
   if (isError) return <section>Some error</section>;

   return (
      <section className={styles.slider}>
         <div className={styles.sliderInfo}>
            <Title>{title}</Title>
            <Link to={`/search/${title}`}>
               <MyButton>SEE MORE</MyButton>
            </Link>
         </div>

         <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            navigation={false}
            breakpoints={breakpoints}
            spaceBetween={20}
            className={styles.slider__wrapper}>
            {bookList.map((el) => (
               <SwiperSlide key={el.ISBN13}>
                  <BookPreview
                     {...el}
                     addToCartButton={
                        <AddToCart
                           ISBN13={el.ISBN13}
                           data={{
                              count: 1,
                              image: el.image,
                              price: el.price,
                              title: el.title,
                           }}
                        />
                     }
                  />
               </SwiperSlide>
            ))}
            <SliderController theme="alternative" indentation={-10} />
         </Swiper>
      </section>
   );
};
