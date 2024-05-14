import { FC, useEffect,  } from 'react'
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { ProductCard } from 'entities/ProductCard';

import styles from './SearchList.module.scss'
import { fetchBooksBySearch } from '../model/slices/searchBookThunk';



export const SearchList: FC = () => {
    const { books } = useAppSelector((state) => state.search)

    
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchBooksBySearch('java'))
    }, [])

    if( books.length == 0) return <div></div>
return (
    <div className={styles.searchList}>
        {
            books.map((el) => (
                <div key={el.ISBN13}>
                    <NavLink to={`/books/${el.ISBN13}`} >
                        <ProductCard  {...el} />
                    </NavLink>
                </div>
            ))
        }
    </div>
)
}
