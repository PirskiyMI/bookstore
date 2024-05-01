import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout: FC = () => {
   return (
      <div>
         <main>
            <Outlet />
         </main>
      </div>
   );
};
