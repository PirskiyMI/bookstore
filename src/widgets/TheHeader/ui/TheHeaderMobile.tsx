import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Routes } from 'shared/constants';
import { useInput, useIsOpen } from 'shared/lib/hooks';
import { Burger } from 'shared/ui/Burger';
import { Logo } from 'shared/ui/Logo';
import { MyButton } from 'shared/ui/MyButton';
import { MyField } from 'shared/ui/MyField';

import styles from './TheHeaderMobile.module.scss';

export const TheHeaderMobile: FC = () => {
   const { isOpen, handleOpen, handleClose } = useIsOpen();
   const { value, changeHandler } = useInput();

   return (
      <div className={`${styles.header__container} container`}>
         <div className={styles.header__top}>
            <Link to={Routes.MAIN_PAGE}>
               <Logo />
            </Link>
            <div className={styles.header__cart}>
               <MyButton className={styles.header__button}>Корзина</MyButton>
            </div>
         </div>
         <div className={styles.header__bottom}>
            <div className={styles.header__burger}>
               <Burger isOpen={isOpen} setOpen={isOpen ? handleClose : handleOpen} />
            </div>
            <div className={styles.header__search}>
               <MyField
                  placeholder="Поиск..."
                  value={value}
                  onChange={changeHandler}
                  className={styles.header__field}
               />
            </div>
         </div>
      </div>
   );
};
