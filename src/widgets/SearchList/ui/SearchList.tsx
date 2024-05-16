import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { Preloader } from 'shared/ui/Preloader';
import { Pagination } from 'shared/ui/Pagination';
import { BookPreview } from 'entities/book/BookPreview';
import { AddToCart } from 'features/cart/AddToCart';

import { fetchBooksBySearch } from '../model/searchBookThunk';
import { searchDataSelector, searchLoadingSelector } from '../model/searchBookSelectors';

import styles from './SearchList.module.scss';

export const SearchList: FC = () => {
   const { value } = useParams();
   const [currentPage, setCurrentPage] = useState<number>(1);
   const isLoading = useAppSelector(searchLoadingSelector);
   const searchData = useAppSelector(searchDataSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      setCurrentPage(1);
   }, [value]);

   useEffect(() => {
      if (value) dispatch(fetchBooksBySearch({ value, page: currentPage }));
   }, [dispatch, currentPage, value]);

   if (!searchData) return <section className={styles.searchList}></section>;
   if (isLoading)
      return (
         <section className={styles.searchList}>
            <Preloader />
         </section>
      );

   const { bookList, totalPage } = searchData;

   const title = (
      <h2 className={styles.searchList__title}>
         You searched for : <span className={styles.searchList__accent}>{value}</span>
      </h2>
   );

   const books = (
      <ul className={styles.searchList__list}>
         {bookList.map(({ ISBN13, ...el }) => (
            <li key={ISBN13} className={styles.searchList__item}>
               <BookPreview
                  ISBN13={ISBN13}
                  {...el}
                  addToCartButton={
                     <AddToCart
                        ISBN13={ISBN13}
                        data={{ count: 1, title: el.title, image: el.image, price: el.price }}
                     />
                  }
               />
            </li>
         ))}
      </ul>
   );

   const pagination = (
      <>
         {totalPage > 1 && (
            <div className={styles.searchList__pagination}>
               <Pagination
                  totalPage={totalPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
               />
            </div>
         )}
      </>
   );

   return (
      <section className={styles.searchList}>
         {!bookList.length ? (
            <h2 className={`${styles.searchList__title} ${styles.searchList__title_empty}`}>
               Nothing was found for '{value}'
            </h2>
         ) : (
            <>
               {title}
               {books}
               {pagination}
            </>
         )}
      </section>
   );
};
