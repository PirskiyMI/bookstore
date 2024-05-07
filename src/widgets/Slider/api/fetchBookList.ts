import { axiosRequest } from 'shared/api';

interface IBook {
   title: string;
   subtitle: string;
   isbn13: string;
   price: string;
   image: string;
   url: string;
}

interface IResponse {
   total: string;
   page: string;
   books: IBook[];
}

export const fetchBookList = async (category: string) => {
   const response = await axiosRequest.get<IResponse>(`search/${category}`).then((res) => {
      const result = res.data.books.map((el) => {
         const formattedPrice = el.price.replace(/\$/g, '');
         return { ...el, ISBN13: el.isbn13, price: formattedPrice };
      });
      return result;
   });
   return response;
};
