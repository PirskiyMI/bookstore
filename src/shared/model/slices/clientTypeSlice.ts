import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TClientType } from 'shared/lib/types';

interface State {
   clientType: TClientType | null;
}

const initialState: State = {
   clientType: null,
};

const clientTypeSlice = createSlice({
   name: 'clientType',
   initialState,
   reducers: {
      setClientType: (state, { payload }: PayloadAction<TClientType>) => {
         state.clientType = payload;
      },
   },
});

export const clientTypeReducer = clientTypeSlice.reducer;
export const clientTypeActions = clientTypeSlice.actions;
