import { FC, ReactNode } from 'react';

import styles from './Title.module.scss';

interface IProps {
   children: ReactNode;
}

export const Title: FC<IProps> = ({ children }) => {
   return <h2 className={styles.title}>{children}</h2>;
};
