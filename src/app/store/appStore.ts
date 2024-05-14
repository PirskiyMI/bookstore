import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './rootState';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const setupStore = () =>
   configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: {
               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
         }),
   });

export const store = setupStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
