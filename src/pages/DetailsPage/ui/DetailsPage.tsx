import { FC } from 'react';
import { useParams } from 'react-router-dom';

import styles from './DetailsPage.module.scss';

export const DetailsPage: FC = () => {
   const { id } = useParams();

   return <div className={styles.details}></div>;
};
