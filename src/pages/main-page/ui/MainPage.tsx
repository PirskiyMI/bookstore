import { FC } from 'react';

import styles from './MainPage.module.scss';
import { Banner } from 'widgets/Banner';
import { Slider } from 'widgets/Slider';

export const MainPage: FC = () => {
   return (
      <div className={styles.mainPage}>
         <Banner />
         <div className="container">
            <div className={styles.mainPage__sliders}>
               <Slider title="Python"/>
               <Slider title="JavaScript"/>
               <Slider title="Android"/>
            </div>
         </div>
      </div>
   );
};
