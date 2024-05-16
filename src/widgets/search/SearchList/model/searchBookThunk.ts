import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosRequest } from 'shared/api';

import { IState } from './searchBookSlice';

interface IResponse {
   total: string;
   page: string;
   books: {
      title: string;
      subtitle: string;
      isbn13: string;
      price: string;
      image: string;
      url: string;
   }[];
}

export const fetchBooksBySearch = createAsyncThunk<
   IState['data'],
   { value: string; page: number },
   { rejectValue: string }
>('searchBook/fetchBooksBySearch', async ({ value, page }, { rejectWithValue }) => {
   try {
      const result = await axiosRequest.get<IResponse>(`search/${value}/${page}`).then((res) => {
         const { books, total } = res.data;

         const totalPage = Math.ceil(+total / 10);
         const bookList = books.map(({ isbn13, price, ...el }) => {
            const formattedPrice = price.replace(/\$/g, '');

            return {
               ISBN13: isbn13,
               price: formattedPrice,
               ...el,
            };
         });

         return { bookList, totalPage };
      });

      return result;
   } catch {
      return rejectWithValue('ошибка поиска книг');
   }
});
