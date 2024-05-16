import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Routes } from 'shared/constants';
import { useAppDispatch, useIsOpen } from 'shared/lib/hooks';
import { navMenuActions } from 'shared/model/slices';
import { Burger } from 'shared/ui/Burger';
import { Logo } from 'shared/ui/Logo';
import { MyButton } from 'shared/ui/MyButton';
import { SearchForm } from 'features/SearchForm';

import styles from './TheHeaderMobile.module.scss';

export const TheHeaderMobile: FC = () => {
   const { isOpen, handleOpen, handleClose } = useIsOpen();
   const { setIsNavMenuOpen } = navMenuActions;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setIsNavMenuOpen(isOpen));
   }, [isOpen, dispatch, setIsNavMenuOpen]);

   return (
      <div className={styles.header}>
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
               <SearchForm />
            </div>
         </div>
      </div>
   );
};
