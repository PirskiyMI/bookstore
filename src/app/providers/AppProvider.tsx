import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Preloader } from 'shared/ui/Preloader';

import { store } from '../store';
import { AppRouter } from '../router';
import { persistor } from '../store';

export const AppProvider: FC = () => {
   return (
      <Provider store={store}>
         <PersistGate loading={<Preloader />} persistor={persistor}>
            <AppRouter />
         </PersistGate>
      </Provider>
   );
};
