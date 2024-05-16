import { FC, Suspense, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Preloader } from 'shared/ui/Preloader';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { clientTypeActions } from 'shared/model/slices';
import { ThemeToggler, themeSelector } from 'features/ThemeToggler';
import { TheFooter } from 'widgets/Footer';
import { TheHeader } from 'widgets/TheHeader';
import { NavMenu } from 'widgets/NavMenu';

import styles from './AppLayout.module.scss';

export const AppLayout: FC = () => {
   const theme = useAppSelector(themeSelector);
   const { setClientType } = clientTypeActions;
   const dispatch = useAppDispatch();

   useLayoutEffect(() => {
      dispatch(setClientType(window.innerWidth >= 1024 ? 'desktop' : 'mobile'));
   }, [dispatch, setClientType]);

   useLayoutEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme]);

   return (
      <div className={styles.layout}>
         <TheHeader />
         <div className={styles.layout__navigation}>
            <NavMenu />
         </div>
         <main className={styles.layout__main}>
            <Suspense
               fallback={
                  <div className={'preloader'}>
                     <Preloader />
                  </div>
               }>
               <Outlet />
            </Suspense>
         </main>
         <ToastContainer
            position="bottom-right"
            hideProgressBar={true}
            autoClose={3000}
            theme="colored"
            newestOnTop
         />
         <div className={styles.layout__theme}>
            <ThemeToggler />
         </div>
         <TheFooter />
      </div>
   );
};
