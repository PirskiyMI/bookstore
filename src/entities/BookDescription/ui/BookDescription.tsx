import { FC } from 'react';

import { Title } from 'shared/ui/Title';

import styles from './BookDescription.module.scss';

interface IProps {
   url: string;
   description: string;
}

export const BookDescription: FC<IProps> = ({ description, url }) => {
   return (
      <div className={styles.description}>
         <Title>Description</Title>
         <div className={styles.description__body}>
            <p className={styles.description}>{description}</p>
            <a href={url} target="_blank" className={styles.description__link}>
               Read more
            </a>
         </div>
      </div>
   );
};
