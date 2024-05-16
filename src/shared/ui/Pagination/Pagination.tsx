import { Dispatch, FC, SetStateAction } from 'react';

import { createPages } from 'shared/lib/helpers/createPages';

import styles from './Pagination.module.scss';

interface IProps {
   totalPage: number;
   currentPage: number;
   setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IProps> = ({ totalPage, currentPage, setCurrentPage }) => {
   const pages: number[] = [];
   createPages({ pages, currentPage, totalPage });

   const toFirstPage = () => setCurrentPage(1);
   const toLastPage = () => setCurrentPage(totalPage);
   const toNextPage = () => setCurrentPage((prev) => (prev += 1));
   const toPrevPage = () => setCurrentPage((prev) => (prev -= 1));

   const isFirstPage = currentPage > 4 && totalPage > 5;
   const isLastPage = currentPage < totalPage - 2 && totalPage > 5;

   return (
      <div className={styles.pagination}>
         {currentPage > 1 && (
            <button onClick={toPrevPage} className={styles.pagination__item}>
               Previous
            </button>
         )}

         <ul className={styles.pagination__list}>
            {isFirstPage && (
               <>
                  <li>
                     <button onClick={toFirstPage} className={styles.pagination__item}>
                        1
                     </button>
                  </li>
                  <li>...</li>
               </>
            )}

            {pages.map((el) => {
               const isActive =
                  el === currentPage
                     ? `${styles.pagination__item} ${styles.pagination__item_active}`
                     : styles.pagination__item;
               return (
                  <li>
                     <button onClick={() => setCurrentPage(el)} className={isActive}>
                        {el}
                     </button>
                  </li>
               );
            })}

            {isLastPage && (
               <>
                  <li>...</li>
                  <li>
                     <button onClick={toLastPage} className={styles.pagination__item}>
                        {totalPage}
                     </button>
                  </li>
               </>
            )}
         </ul>
         {currentPage !== totalPage && (
            <button onClick={toNextPage} className={styles.pagination__item}>
               Next
            </button>
         )}
      </div>
   );
};
