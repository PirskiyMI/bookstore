import { FC, memo } from 'react';

import styles from './Burger.module.scss';

interface Props {
   isOpen: boolean;
   setOpen: () => void;
}

export const Burger: FC<Props> = memo(({ isOpen, setOpen }) => {
   const classes = isOpen ? `${styles.burger} ${styles.burger_active}` : styles.burger;

   return (
      <div className={classes} onClick={setOpen}>
         <span className={styles.burger__line} />
         <span className={styles.burger__line} />
         <span className={styles.burger__line} />
      </div>
   );
});
