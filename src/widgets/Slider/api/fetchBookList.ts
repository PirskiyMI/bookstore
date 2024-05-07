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
         return { ISBN13: el.isbn13, ...el };
      });
      return result;
   });
   return response;
};
