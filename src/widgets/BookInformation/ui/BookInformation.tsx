import { FC, useEffect } from 'react';

import { Fallback } from 'shared/ui/Fallback';
import { Preloader } from 'shared/ui/Preloader';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { clientTypeSelector } from 'shared/model/selectors';
import { BookDetails } from 'entities/book/BookDetails';
import { Author } from 'entities/Author';
import { BookDescription } from 'entities/book/BookDescription';

import { fetchBookInformation } from '../model/bookInformationThunks';
import {
   bookInformationDataSelector,
   bookInformationLoadingSelector,
} from '../model/bookInformationSelectors';

import styles from './BookInformation.module.scss';
import { AddToCart } from 'features/cart/AddToCart';

interface IProps {
   ISBN13: string;
}

export const BookInformation: FC<IProps> = ({ ISBN13 }) => {
   const clientType = useAppSelector(clientTypeSelector);
   const bookInformation = useAppSelector(bookInformationDataSelector);
   const loading = useAppSelector(bookInformationLoadingSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchBookInformation(ISBN13));
   }, [ISBN13, dispatch]);

   if (loading)
      return (
         <section className="preloader">
            <Preloader />
         </section>
      );
   if (!bookInformation)
      return (
         <section>
            <Fallback />
         </section>
      );

   const { bookDetails, bookDescription, publicationInformation } = bookInformation;

   return (
      <section className={styles.information}>
         <div className={styles.information__header}>
            <BookDetails
               {...bookDetails}
               publication={publicationInformation}
               addToCartButton={
                  <AddToCart
                     data={{
                        title: bookDetails.title,
                        image: bookDetails.image,
                        price: bookDetails.price,
                        count: 1,
                     }}
                     ISBN13={ISBN13}
                  />
               }
            />
            {clientType === 'desktop' && (
               <div className={styles.information__authors}>
                  <Author author={bookDetails.authors} />
               </div>
            )}
         </div>
         <BookDescription {...bookDescription} />
      </section>
   );
};
