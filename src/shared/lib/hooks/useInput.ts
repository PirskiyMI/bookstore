import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = (initialValue?: string) => {
   const [value, setValue] = useState(initialValue ? initialValue : '');

   const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   }, []);

   return { value, changeHandler };
};
