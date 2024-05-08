import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './MyButton.module.scss';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   className?: string;
}

export const MyButton: FC<IProps> = ({ className, children, ...IProps }) => {
   const classes = className ? `${styles.myButton} ${className}` : styles.myButton;

   return (
      <button {...IProps} className={classes}>
         {children}
      </button>
   );
};
