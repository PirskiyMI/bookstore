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

export const fetchBooksBySearch = createAsyncThunk<IState['data'], string, { rejectValue: string }>(
   'searchBook/fetchBooksBySearch',
   async (value, { rejectWithValue }) => {
      try {
         const result = await axiosRequest.get<IResponse>(`search/${value}`).then((res) => {
            const { books, page } = res.data;

            const bookList = books.map(({ isbn13, ...el }) => ({ ISBN13: isbn13, ...el }));

            return { bookList, totalPage: page };
         });

         return result;
      } catch {
         return rejectWithValue('ошибка поиска книг');
      }
   },
);
