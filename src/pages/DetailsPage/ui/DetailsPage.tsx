import { FC } from 'react';
//import { useParams } from 'react-router-dom';

import styles from './DetailsPage.module.scss';
import { BookDetails } from 'entities/BookDetails';
import { bookDetails } from 'entities/BookDetails';
import { BookAuthor } from 'entities/BookAuthor';

export const DetailsPage: FC = () => {
   //const { id } = useParams();

   return (
      <div className={styles.details}>
         <BookDetails {...bookDetails} addToCartButton={<button>AddToCartButton</button>} />
         <BookAuthor author='test testov'/>
      </div>
   );
};
