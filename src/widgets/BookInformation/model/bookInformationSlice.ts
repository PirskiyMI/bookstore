import { createSlice } from '@reduxjs/toolkit';

import { IBookDescription } from 'entities/BookDescription';
import { IBookDetails, IPublicationInformation } from 'entities/BookDetails';

import { fetchBookInformation } from './bookInformationThunks';

export interface IState {
   data: {
      bookDetails: IBookDetails;
      bookDescription: IBookDescription;
      publicationInformation: IPublicationInformation;
   } | null;
   loading: boolean;
   error: string | null;
}

const initialState: IState = {
   data: null,
   loading: false,
   error: null,
};

const bookInformationSlice = createSlice({
   name: 'bookInformation',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchBookInformation.pending, (state) => {
            state.error = null;
            state.loading = true;
         })
         .addCase(fetchBookInformation.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
         })
         .addCase(fetchBookInformation.rejected, (state, { payload }) => {
            state.loading = false;
            if (payload) state.error = payload;
         });
   },
});

export const bookInformationReducer = bookInformationSlice.reducer;
