import { lazy } from 'react';

export const CartPage = lazy(async () => {
   const { CartPage } = await import('pages/CartPage');
   return { default: CartPage };
});
export const DetailsPage = lazy(async () => {
   const { DetailsPage } = await import('pages/DetailsPage');
   return { default: DetailsPage };
});
export const MainPage = lazy(async () => {
   const { MainPage } = await import('pages/MainPage');
   return { default: MainPage };
});
export const AboutUsPage = lazy(async () => {
   const { AboutUsPage } = await import('pages/AboutUsPage');
   return { default: AboutUsPage };
});
export const ErrorPage = lazy(async () => {
   const { ErrorPage } = await import('pages/ErrorPage');
   return { default: ErrorPage };
});
export const CategoriesPage = lazy(async () => {
   const { CategoriesPage } = await import('pages/CategoriesPage');
   return { default: CategoriesPage };
});
