import { FC } from 'react';

import { OurTeam } from 'widgets/OurTeam';

import styles from './AboutUsPage.module.scss';

export const AboutUsPage: FC = () => {
   return (
      <div className={styles.aboutUsPage}>
         <OurTeam />
      </div>
   );
};
