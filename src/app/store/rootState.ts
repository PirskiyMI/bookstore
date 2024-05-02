import { combineReducers } from '@reduxjs/toolkit';

import { navMenuReducer } from 'shared/model/slices';
import { clientTypeReducer } from 'shared/model/slices';

export const rootReducer = combineReducers({
   clientType: clientTypeReducer,
   navMenu: navMenuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
