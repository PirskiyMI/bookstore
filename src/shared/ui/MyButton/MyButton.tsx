import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './MyButton.module.scss';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   className?: string;
}

export const MyButton: FC<IProps> = ({ className, children, ...IProps }) => {
   const classes = className ? `${styles.button} ${className}` : styles.button;

   return (
      <button {...IProps} className={classes}>
         {children}
      </button>
   );
};
