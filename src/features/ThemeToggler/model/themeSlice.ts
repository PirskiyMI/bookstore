import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TTheme } from '../lib/types/theme';

interface IState {
   theme: TTheme;
}

const initialState: IState = {
   theme: localStorage.getItem('theme') ? (localStorage.getItem('theme') as TTheme) : 'light',
};

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      setTheme: (state, { payload }: PayloadAction<TTheme>) => {
         state.theme = payload;
      },
   },
});

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;
