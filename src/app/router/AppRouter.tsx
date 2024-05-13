import { lazy } from 'react';
import {
   Route,
   RouterProvider,
   createHashRouter,
   createRoutesFromElements,
} from 'react-router-dom';

import { Routes } from 'shared/constants';

const CartPage = lazy(async () => {
   const { CartPage } = await import('pages/CartPage');
   return { default: CartPage };
});
const DetailsPage = lazy(async () => {
   const { DetailsPage } = await import('pages/DetailsPage');
   return { default: DetailsPage };
});
const MainPage = lazy(async () => {
   const { MainPage } = await import('pages/main-page');
   return { default: MainPage };
});
const AboutUsPage = lazy(async () => {
   const { AboutUsPage } = await import('pages/AboutUsPage');
   return { default: AboutUsPage };
});
const ErrorPage = lazy(async () => {
   const { ErrorPage } = await import('pages/ErrorPage');
   return { default: ErrorPage };
});

import { AppLayout } from '../layout';

export const AppRouter = () => {
   const routes = createRoutesFromElements(
      <Route path={Routes.MAIN_PAGE} element={<AppLayout />} errorElement={<ErrorPage />}>
         <Route index element={<MainPage />} />
         <Route path={Routes.DETAILS_PAGE} element={<DetailsPage />} />
         <Route path={Routes.ABOUT_US_PAGE} element={<AboutUsPage />} />
         <Route path={Routes.CART_PAGE} element={<CartPage />} />
      </Route>,
   );

   const router = createHashRouter(routes, {});

   return <RouterProvider router={router} />;
};
