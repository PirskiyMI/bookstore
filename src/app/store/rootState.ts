import { combineReducers } from '@reduxjs/toolkit';

import { navMenuReducer } from 'shared/model/slices';
import { clientTypeReducer } from 'shared/model/slices';
import { cartReducer } from 'entities/Cart';
import { bookInformationReducer } from 'widgets/BookInformation';

export const rootReducer = combineReducers({
   clientType: clientTypeReducer,
   navMenu: navMenuReducer,
   cart: cartReducer,
   bookInformation: bookInformationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
