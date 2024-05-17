import { axiosRequest } from 'shared/api';
import { ISearchResponse } from 'shared/lib/types';
import { IBookPreview } from 'entities/book/BookPreview';

export const fetchBookList = async (category: string): Promise<IBookPreview[]> => {
   return await axiosRequest.get<ISearchResponse>(`search/${category}`).then((res) => {
      return res.data.books.map((el) => {
         const formattedPrice = el.price.replace(/\$/g, '');
         return {
            title: el.title,
            image: el.image,
            subtitle: el.subtitle,
            ISBN13: el.isbn13,
            price: formattedPrice,
         };
      });
   });
};
