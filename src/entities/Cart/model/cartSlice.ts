import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IData {
   title: string;
   image: string;
   price: string;
   count: number;
}

type TState = Record<string, IData>;

const initialState: TState = {};

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
      addToCart: (
         state,
         {
            payload,
         }: PayloadAction<{
            ISBN13: string;
            data: IData;
         }>,
      ) => {
         state[payload.ISBN13] = payload.data;
      },
      removeFromCart: (state, { payload }: PayloadAction<string>) => {
         delete state[payload];
      },
   },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
