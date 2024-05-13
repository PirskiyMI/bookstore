import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosRequest } from 'shared/api';

import { IState } from './bookInformationSlice';

interface IResponse {
   error: string;
   title: string;
   subtitle: string;
   authors: string;
   publisher: string;
   isbn10: string;
   isbn13: string;
   pages: string;
   year: string;
   rating: string;
   desc: string;
   price: string;
   image: string;
   url: string;
}

export const fetchBookInformation = createAsyncThunk<
   IState['data'],
   string,
   { rejectValue: string }
>('bookInformation/fetchBookInformation', async (ISBN13, { rejectWithValue }) => {
   try {
      return await axiosRequest.get<IResponse>(`books/${ISBN13}`).then((res) => {
         const {
            authors,
            desc,
            url,
            title,
            subtitle,
            image,
            rating,
            price,
            isbn10,
            isbn13,
            publisher,
            year,
            pages,
         } = res.data;

         const formattedPrice = price.replace(/\$/g, '');

         return {
            bookDescription: { description: desc, url },
            bookDetails: { authors, title, subtitle, image, rating, price: formattedPrice },
            publicationInformation: {
               ISBN10: isbn10,
               ISBN13: isbn13,
               pages,
               published: year,
               publisher,
            },
         };
      });
   } catch (error) {
      return rejectWithValue('Ошибка при попытке получить информацию о книге');
   }
});
