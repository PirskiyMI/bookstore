import { FC } from 'react';

import { Developer } from 'entities/Developer';

import { teamMembers } from '../constants/teamMembers';

import styles from './OurTeam.module.scss';

export const OurTeam: FC = () => {
   const developerList = (
      <>
         {teamMembers.map((el) => (
            <div key={el.id}>
               <Developer {...el} />
            </div>
         ))}
      </>
   );

   return <div className={styles.team}>{developerList}</div>;
};
