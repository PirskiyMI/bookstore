import { FC, HTMLAttributes, memo } from 'react';

import styles from './MyField.module.scss';

interface Props extends HTMLAttributes<HTMLInputElement> {
   value: string;
   type?: 'text' | 'number';
   placeholder?: string;
   className?: string;
}

export const MyField: FC<Props> = memo(
   ({ value, type = 'text', placeholder, className, ...props }) => {
      const classes = className ? `${styles.field} ${className}` : styles.field;

      return (
         <input
            value={value}
            type={type}
            placeholder={placeholder}
            {...props}
            className={classes}
         />
      );
   },
);
