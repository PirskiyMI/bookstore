import { createSlice } from '@reduxjs/toolkit';

import { IBookPreview } from 'entities/book/BookPreview';

import { fetchBooksBySearch } from './searchBookThunk';

export interface IState {
   data: {
      bookList: IBookPreview[];
      totalPage: string;
   } | null;
   isLoading: boolean;
   error: string;
}

const initialState: IState = {
   data: null,
   isLoading: false,
   error: '',
};

const searchBookSlice = createSlice({
   name: 'searchBook',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchBooksBySearch.pending, (state) => {
            state.isLoading = true;
            state.error = '';
         })
         .addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
         })
         .addCase(fetchBooksBySearch.rejected, (state, { payload }) => {
            state.isLoading = false;
            if (payload) state.error = payload;
         });
   },
});

export const searchBookAction = searchBookSlice.actions;
export const searchBookReducer = searchBookSlice.reducer;
