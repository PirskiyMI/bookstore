import { FC } from 'react';

import { useAppSelector } from 'shared/lib/hooks';
import { clientTypeSelector } from 'shared/model/selectors';
import { BookDetails, bookDetails } from 'entities/book/BookDetails';
import { BookAuthor } from 'entities/Author';
import { BookDescription } from 'entities/book/BookDescription';

import styles from './BookInformation.module.scss';

export const BookInformation: FC = () => {
   const clientType = useAppSelector(clientTypeSelector);

   return (
      <div className={styles.information}>
         <div className={styles.information__header}>
            <BookDetails {...bookDetails} addToCartButton={<button>AddToCartButton</button>} />
            {clientType === 'desktop' && (
               <div className={styles.information__authors}>
                  <BookAuthor author="Test testov" />
               </div>
            )}
         </div>
         <BookDescription
            description={
               'An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps teams highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...'
            }
            url={'https://itbook.store/books/9781617294136'}
         />
      </div>
   );
};
