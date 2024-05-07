import { FC } from 'react';
import { personalData } from '../constants';
import { AboutCard } from 'entities/AboutCard';
import styles from './AboutInfo.module.scss';

export const AboutInfo: FC = () => {
   return (
      <div className={styles.aboutInfo}>
         {personalData.map((el) => (
            <div key={el.id}>
               <AboutCard
                  id={el.id}
                  img={el.img}
                  name={el.name}
                  surname={el.surname}
                  post={el.post}
                  github={el.github}
                  githubUrl={el.githubUrl}
                  telegram={el.telegram}
                  telegramUrl={el.telegramUrl}
                  mail={el.mail}
                  mailUrl={el.mailUrl}
               />
            </div>
         ))}
      </div>
   );
};
