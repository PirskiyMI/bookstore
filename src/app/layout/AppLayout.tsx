import { FC, Suspense, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Preloader } from 'shared/ui/Preloader';
import { useAppDispatch } from 'shared/lib/hooks';
import { clientTypeActions } from 'shared/model/slices';
import { ThemeToggler } from 'features/ThemeToggler';
import { TheFooter } from 'widgets/TheFooter';
import { TheHeader } from 'widgets/TheHeader';
import { NavMenu } from 'widgets/NavMenu';

import styles from './AppLayout.module.scss';
import { useTheme } from 'features/ThemeToggler/lib/hooks/useTheme';

export const AppLayout: FC = () => {
   const { theme } = useTheme();
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
         <div className={styles.layout__theme}>
            <ThemeToggler />
         </div>
         <TheFooter />
      </div>
   );
};
