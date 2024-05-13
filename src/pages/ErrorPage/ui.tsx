import { FC } from 'react';
import { Fallback } from 'shared/ui/Fallback';

export const ErrorPage: FC = () => {
   return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Fallback />
      </div>
   );
};
