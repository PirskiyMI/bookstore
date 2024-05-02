import { Link } from 'react-router-dom';
import { FC } from 'react';

import { Routes } from 'shared/constants';
import { useInput } from 'shared/lib/hooks';
import { Logo } from 'shared/ui/Logo';
import { MyField } from 'shared/ui/MyField';
import { MyButton } from 'shared/ui/MyButton';

import styles from './TheHeaderDesktop.module.scss';

export const TheHeaderDesktop: FC = () => {
   const { value, changeHandler } = useInput();

   return (
      <div className={`${styles.header__container} container`}>
         <Link to={Routes.MAIN_PAGE}>
            <Logo />
         </Link>
         <div className={styles.header__search}>
            <MyField
               placeholder="Поиск..."
               value={value}
               onChange={changeHandler}
               className={styles.header__field}
            />
         </div>
         <div className={styles.header__cart}>
            <MyButton className={styles.header__button}>Корзина</MyButton>
         </div>
      </div>
   );
};
