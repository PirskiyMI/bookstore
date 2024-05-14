import {
   Route,
   RouterProvider,
   createHashRouter,
   createRoutesFromElements,
} from 'react-router-dom';

import { Routes } from 'shared/constants';
import { MainPage } from 'pages/main-page';
import { DetailsPage } from 'pages/DetailsPage';
import { AboutUsPage } from 'pages/AboutUsPage';
import { CartPage } from 'pages/CartPage';

import { AppLayout } from '../layout';
import { SearchPage } from 'pages/SearchPage';

export const AppRouter = () => {
   const routes = createRoutesFromElements(
      <Route path={Routes.MAIN_PAGE} element={<AppLayout />}>
         <Route index element={<MainPage />} />
         <Route path={Routes.DETAILS_PAGE} element={<DetailsPage />} />
         <Route path={Routes.ABOUT_US_PAGE} element={<AboutUsPage />} />
         <Route path={Routes.CART_PAGE} element={<CartPage />} />
         <Route path={Routes.SEARCH_PAGE} element={<SearchPage />} />
      </Route>,
   );

   const router = createHashRouter(routes, {});

   return <RouterProvider router={router} />;
};
