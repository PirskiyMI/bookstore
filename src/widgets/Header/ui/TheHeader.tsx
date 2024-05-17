import { FC } from 'react';

import { useAppSelector } from 'shared/lib/hooks';
import { clientTypeSelector } from 'shared/model/selectors';

import styles from './TheHeader.module.scss';
import { TheHeaderDesktop } from './TheHeaderDesktop';
import { TheHeaderMobile } from './TheHeaderMobile';

export const TheHeader: FC = () => {
   const clientType = useAppSelector(clientTypeSelector);

   return (
      <header className={styles.header}>
         <div className="container">
            {clientType === 'desktop' ? <TheHeaderDesktop /> : <TheHeaderMobile />}
         </div>
      </header>
   );
};
