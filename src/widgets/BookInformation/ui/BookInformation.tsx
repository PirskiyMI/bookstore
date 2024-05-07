import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { clientTypeSelector } from 'shared/model/selectors';
import { BookDetails } from 'entities/BookDetails';
import { BookAuthor } from 'entities/BookAuthor';
import { BookDescription } from 'entities/BookDescription';

import { fetchBookInformation } from '../model/bookInformationThunks';
import {
   bookInformationDataSelector,
   bookInformationLoadingSelector,
} from '../model/bookInformationSelectors';

import styles from './BookInformation.module.scss';

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

   if (loading) return <section>Loading...</section>;
   if (!bookInformation) return <section>No information about this book</section>;

   const { bookDetails, bookDescription, publicationInformation } = bookInformation;

   return (
      <section className={styles.information}>
         <div className={styles.information__header}>
            <BookDetails
               {...bookDetails}
               publication={publicationInformation}
               addToCartButton={<button>AddToCartButton</button>}
            />
            {clientType === 'desktop' && (
               <div className={styles.information__authors}>
                  <BookAuthor author={bookDetails.authors} />
               </div>
            )}
         </div>
         <BookDescription {...bookDescription} />
      </section>
   );
};
