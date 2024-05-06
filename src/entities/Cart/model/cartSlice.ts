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
   '9781484206485': {
      title: 'Practical MongoDB',
      image: 'https://itbook.store/img/books/9781484206485.png',
      price: '32.04',
      count: 1,
   },
   '9781484211830': {
      title: 'The Definitive Guide to MongoDB, 3rd Edition',
      image: 'https://itbook.store/img/books/9781484211830.png',
      price: '47.11',
      count: 1,
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
         state[payload].count--;
      },
      removeFromCart: (state, { payload }: PayloadAction<string>) => {
         delete state[payload];
      },
   },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
