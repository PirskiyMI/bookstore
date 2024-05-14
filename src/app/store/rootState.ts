import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { navMenuReducer } from 'shared/model/slices';
import { clientTypeReducer } from 'shared/model/slices';
import { cartReducer } from 'entities/Cart';
import { themeReducer } from 'features/ThemeToggler';
import { bookInformationReducer } from 'widgets/BookInformation';

const rootReducer = combineReducers({
   clientType: clientTypeReducer,
   navMenu: navMenuReducer,
   cart: cartReducer,
   theme: themeReducer,
   bookInformation: bookInformationReducer,
});

const persistConfig = {
   key: 'root',
   storage,
   whiteList: ['theme', 'cart'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
