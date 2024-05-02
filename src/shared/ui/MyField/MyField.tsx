import { FC, HTMLAttributes, memo } from 'react';

import styles from './MyField.module.scss';

interface IProps extends HTMLAttributes<HTMLInputElement> {
   value: string;
   type?: 'text' | 'number';
   placeholder?: string;
   className?: string;
}

export const MyField: FC<IProps> = memo(
   ({ value, type = 'text', placeholder, className, ...IProps }) => {
      const classes = className ? `${styles.field} ${className}` : styles.field;

      return (
         <input
            value={value}
            type={type}
            placeholder={placeholder}
            {...IProps}
            className={classes}
         />
      );
   },
);
