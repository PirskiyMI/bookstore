import { IDeveloper } from 'entities/DeveloperCard';

import GithubIcon from 'shared/assets/icons/github.svg?react';
import TelegramIcon from 'shared/assets/icons/telegram.svg?react';
import MailIcon from 'shared/assets/icons/mail.svg?react';

export const teamMembers: IDeveloper[] = [
   {
      id: 1,
      img: 'https://avatars.githubusercontent.com/u/114065463?v=4',
      name: 'Максим',
      surname: 'Пирский',
      job: 'Frontend Developer',
      socials: [
         { title: 'PirskiyMI', url: 'https://github.com/PirskiyMI', icon: <GithubIcon /> },
         { title: '@pirskiymi', url: 'https://t.me/pirskiymi', icon: <TelegramIcon /> },
         {
            title: 'pirskiymi98@gmail.com',
            url: 'pirskiymi98@gmail.com',
            icon: <MailIcon />,
            isMail: true,
         },
      ],
   },
   {
      id: 2,
      img: 'https://avatars.githubusercontent.com/u/100757585?s=400&u=0d82c70cce06569ed900ec09cbbd4ebf049046a5&v=4',
      name: 'Максим',
      surname: 'Попов',
      job: 'Frontend Developer',
      socials: [
         { title: 'Maksim-pp', url: 'https://github.com/Maksim-pp', icon: <GithubIcon /> },
         { title: '@Maksimka_pp', url: 'https://t.me/Maksimka_pp', icon: <TelegramIcon /> },
         {
            title: 'maks-atos-popov@mail.ru',
            url: 'maks-atos-popov@mail.ru',
            icon: <MailIcon />,
            isMail: true,
         },
      ],
   },
];
