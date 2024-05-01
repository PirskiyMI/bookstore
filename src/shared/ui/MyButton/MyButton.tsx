import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './MyButton.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   className?: string;
}

export const MyButton: FC<Props> = ({ className, children, ...props }) => {
   const classes = className ? `${styles.button} ${className}` : styles.button;

   return (
      <button {...props} className={classes}>
         {children}
      </button>
   );
};
