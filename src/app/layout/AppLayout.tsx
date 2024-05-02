import { FC, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch } from 'shared/lib/hooks';
import { clientTypeActions } from 'shared/model/slices';
import { TheHeader } from 'widgets/TheHeader';
import { NavMenu } from 'widgets/NavMenu';

export const AppLayout: FC = () => {
   const { setClientType } = clientTypeActions;
   const dispatch = useAppDispatch();

   useLayoutEffect(() => {
      dispatch(setClientType(window.innerWidth >= 1024 ? 'desktop' : 'mobile'));
   }, [dispatch, setClientType]);

   return (
      <div>
         <TheHeader />
         <NavMenu />
         <main>
            <Outlet />
         </main>
      </div>
   );
};
