import { FC, Suspense, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Preloader } from 'shared/ui/Preloader';
import { useAppDispatch } from 'shared/lib/hooks';
import { clientTypeActions } from 'shared/model/slices';
import { TheFooter } from 'widgets/TheFooter';
import { TheHeader } from 'widgets/TheHeader';
import { NavMenu } from 'widgets/NavMenu';

import styles from './AppLayout.module.scss';

export const AppLayout: FC = () => {
   const { setClientType } = clientTypeActions;
   const dispatch = useAppDispatch();

   useLayoutEffect(() => {
      dispatch(setClientType(window.innerWidth >= 1024 ? 'desktop' : 'mobile'));
   }, [dispatch, setClientType]);

   return (
      <div className={styles.layout}>
         <TheHeader />
         <NavMenu />
         <main className={styles.layout__main}>
            <Suspense
               fallback={
                  <div className={styles.layout__preloader}>
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
         <TheFooter />
      </div>
   );
};
