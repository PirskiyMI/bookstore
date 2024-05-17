import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICartItemPreview } from '../types';

type TState = Record<string, ICartItemPreview>;

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
            data: ICartItemPreview;
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
