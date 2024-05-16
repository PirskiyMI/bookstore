import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { BookInformation } from 'widgets/BookInformation';

import styles from './DetailsPage.module.scss';

export const DetailsPage: FC = () => {
   const { id } = useParams();

   return (
      <div className="container">
         <div className={styles.details}>
            <BookInformation ISBN13={id!} />
         </div>
      </div>
   );
};
