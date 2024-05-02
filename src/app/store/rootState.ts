import { combineReducers } from '@reduxjs/toolkit';

import { clientTypeReducer } from 'shared/model/slices/clientTypeSlice';

export const rootReducer = combineReducers({
   clientType: clientTypeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
