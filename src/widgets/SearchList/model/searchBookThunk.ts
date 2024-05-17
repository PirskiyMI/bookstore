import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosRequest } from 'shared/api';
import { ISearchResponse } from 'shared/lib/types';

import { IState } from './searchBookSlice';

export const fetchBooksBySearch = createAsyncThunk<
   IState['data'],
   { value: string; page: number },
   { rejectValue: string }
>('searchBook/fetchBooksBySearch', async ({ value, page }, { rejectWithValue }) => {
   const formattedValue = value.replace(/\+/g, 'p').toLowerCase();

   try {
      const result = await axiosRequest
         .get<ISearchResponse>(`search/${formattedValue}/${page}`)
         .then((res) => {
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
