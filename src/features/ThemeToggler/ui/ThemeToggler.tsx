import { FC } from 'react';

import MoonIcon from 'shared/assets/icons/moon-icon.svg?react';
import SunIcon from 'shared/assets/icons/sun-icon.svg?react';

import { useTheme } from '../lib/hooks/useTheme';

import styles from './ThemeToggler.module.scss';

export const ThemeToggler: FC = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <button onClick={toggleTheme} className={styles.themeToggler}>
         {theme === 'light' ? (
            <SunIcon className={styles.themeToggler__icon} />
         ) : (
            <MoonIcon className={styles.themeToggler__icon} />
         )}
      </button>
   );
};
