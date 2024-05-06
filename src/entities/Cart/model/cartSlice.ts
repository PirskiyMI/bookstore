import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TState = Record<
   string,
   {
      title: string;
      image: string;
      price: string;
      count: number;
   }
>;

const initialState: TState = {
   '97543214': {
      title: 'Practical MongoDB',
      image: 'https://itbook.store/img/books/9781484206485.png',
      price: '32.04',
      count: 1,
   },
   '97543218': {
      title: 'Practical MongoDB',
      image: 'https://itbook.store/img/books/9781484206485.png',
      price: '1.04',
      count: 5,
   },
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      incrementCount: (state, { payload }: PayloadAction<string>) => {
         state[payload].count++;
      },
      decrementCount: (state, { payload }: PayloadAction<string>) => {
         state[payload].count++;
      },
   },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
