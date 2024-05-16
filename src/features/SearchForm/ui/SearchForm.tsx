import { FC, FormEvent } from 'react';

import { useInput } from 'shared/lib/hooks';
import { MyField } from 'shared/ui/MyField';

import styles from './SearchForm.module.scss';
import { useNavigate } from 'react-router-dom';

export const SearchForm: FC = () => {
   const { value, changeHandler } = useInput();
   const navigate = useNavigate();

   const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      navigate(`/search/${value}`);
   };

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
};
