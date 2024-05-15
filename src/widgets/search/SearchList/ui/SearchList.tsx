import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { BookPreview } from 'entities/book/BookPreview';

import { fetchBooksBySearch } from '../model/searchBookThunk';

import styles from './SearchList.module.scss';
import { AddToCart } from 'features/cart/AddToCart';

export const SearchList: FC = () => {
   const { data } = useAppSelector((state) => state.search);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchBooksBySearch('java'));
   }, [dispatch]);

   if (!data) return <div></div>;

   const { bookList, totalPage } = data;

   return (
      <ul className={styles.searchList}>
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
};
