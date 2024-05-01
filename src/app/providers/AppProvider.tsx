import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';
import { AppRouter } from '../router';

export const AppProvider: FC = () => {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};
