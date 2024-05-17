import { Routes } from 'shared/constants';

import { IFooterLink } from '../lib/types/link';

export const usefulLinks: IFooterLink[] = [
   { title: 'About us', path: Routes.ABOUT_US_PAGE, isLink: true },
   { title: 'API used', path: 'https://api.itbook.store/', isLink: false },
   { title: 'Free eBooks', path: 'https://itbook.store/books/free', isLink: false },
];
