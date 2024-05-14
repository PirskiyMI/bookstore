import { FC, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import MoonIcon from 'shared/assets/icons/moon-icon.svg?react';
import SunIcon from 'shared/assets/icons/sun-icon.svg?react';

import { themeSelector } from '../model';
import { themeActions } from '../model/themeSlice';

import styles from './ThemeToggler.module.scss';

export const ThemeToggler: FC = () => {
   const theme = useAppSelector(themeSelector);
   const { setTheme } = themeActions;
   const dispatch = useAppDispatch();

   const toggleTheme = useCallback(() => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      dispatch(setTheme(newTheme));
   }, [dispatch, setTheme, theme]);

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
