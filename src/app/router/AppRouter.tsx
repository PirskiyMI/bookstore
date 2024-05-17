import {
   Route,
   RouterProvider,
   createHashRouter,
   createRoutesFromElements,
} from 'react-router-dom';

import { Routes } from 'shared/constants';
import { SearchPage } from 'pages/SearchPage';

import { AppLayout } from '../layout';
import {
   ErrorPage,
   MainPage,
   DetailsPage,
   AboutUsPage,
   CartPage,
   CategoriesPage,
} from './lazyPages';

export const AppRouter = () => {
   const routes = createRoutesFromElements(
      <Route path={Routes.MAIN_PAGE} element={<AppLayout />} errorElement={<ErrorPage />}>
         <Route index element={<MainPage />} />
         <Route path={Routes.DETAILS_PAGE} element={<DetailsPage />} />
         <Route path={Routes.CART_PAGE} element={<CartPage />} />
         <Route path={Routes.SEARCH_PAGE} element={<SearchPage />} />
         <Route path={Routes.CATEGORY_PAGE} element={<CategoriesPage />} />
         <Route path={Routes.ABOUT_US_PAGE} element={<AboutUsPage />} />
      </Route>,
   );

   const router = createHashRouter(routes, {});

   return <RouterProvider router={router} />;
};
