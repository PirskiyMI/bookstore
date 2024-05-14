import { combineReducers } from '@reduxjs/toolkit';

import { navMenuReducer } from 'shared/model/slices';
import { clientTypeReducer } from 'shared/model/slices';
import { cartReducer } from 'entities/Cart';
import { searchBookReducer } from 'widgets/SearchList';

export const rootReducer = combineReducers({
   clientType: clientTypeReducer,
   navMenu: navMenuReducer,
   cart: cartReducer,
   search: searchBookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
