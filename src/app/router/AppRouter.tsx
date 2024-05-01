import {
   Route,
   RouterProvider,
   createHashRouter,
   createRoutesFromElements,
} from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { Routes } from 'shared/constants';

import { AppLayout } from '../layout';

export const AppRouter = () => {
   const routes = createRoutesFromElements(
      <Route path={Routes.MAIN_PAGE} element={<AppLayout />}>
         <Route index element={<MainPage />} />
      </Route>,
   );

   const router = createHashRouter(routes, {});

   return <RouterProvider router={router} />;
};
