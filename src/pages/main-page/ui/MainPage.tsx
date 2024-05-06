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
               <Slider title='Python' path='' />
               <Slider title='JavaScript' path='' />
               <Slider title='Android' path='' />
            </div>

         </div>
      </div>
   );
};