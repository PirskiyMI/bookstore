import { FC, FormEvent, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInput } from 'shared/lib/hooks';
import { MyField } from 'shared/ui/MyField';

import styles from './SearchForm.module.scss';

export const SearchForm: FC = memo(() => {
   const { value, changeHandler } = useInput();
   const navigate = useNavigate();

   const onSubmit = useCallback(
      (e: FormEvent) => {
         e.preventDefault();
         navigate(`/search/${value}`);
      },
      [navigate, value],
   );

   return (
      <form onSubmit={onSubmit} className={styles.searchForm}>
         <MyField
            placeholder="Input books by title, ISBN or keywords"
            value={value}
            onChange={changeHandler}
            className={styles.searchForm__field}
         />
      </form>
   );
});
