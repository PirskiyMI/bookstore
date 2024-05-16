import { FC } from 'react';

import { Banner } from 'widgets/Banner';
import { Slider } from 'widgets/Slider';

import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
   return (
      <div className={styles.mainPage}>
         <div className={styles.mainPage__banner}>
            <Banner />
         </div>
         <div className={`${styles.mainPage__container} container`}>
            <div className={styles.mainPage__sliders}>
               <Slider title="Python" />
               <Slider title="JavaScript" />
               <Slider title="Android" />
            </div>
         </div>
      </div>
   );
};
