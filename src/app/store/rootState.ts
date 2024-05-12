import { combineReducers } from '@reduxjs/toolkit';

import { navMenuReducer } from 'shared/model/slices';
import { clientTypeReducer } from 'shared/model/slices';
import { cartReducer } from 'entities/Cart';
import { themeReducer } from 'features/ThemeToggler';

export const rootReducer = combineReducers({
   clientType: clientTypeReducer,
   navMenu: navMenuReducer,
   cart: cartReducer,
   theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
