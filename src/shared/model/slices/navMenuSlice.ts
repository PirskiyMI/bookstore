import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
   isOpen: boolean;
}

const initialState: IState = {
   isOpen: false,
};

const navMenuSlice = createSlice({
   name: 'navMenu',
   initialState,
   reducers: {
      setIsNavMenuOpen: (state, { payload }: PayloadAction<boolean>) => {
         state.isOpen = payload;
      },
   },
});

export const navMenuActions = navMenuSlice.actions;
export const navMenuReducer = navMenuSlice.reducer;
