import { useState } from 'react';

const enum Theme {
   LIGHT = 'light',
   DARK = 'dark',
}

export const useTheme = () => {
   const [theme, setTheme] = useState<string>(
      localStorage.getItem('theme') ? (localStorage.getItem('theme') as string) : Theme.LIGHT,
   );

   const toggleTheme = () => {
      const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
   };

   return { theme, toggleTheme };
};
