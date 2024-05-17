interface IBook {
   title: string;
   subtitle: string;
   isbn13: string;
   price: string;
   image: string;
   url: string;
}

export interface ISearchResponse {
   total: string;
   page: string;
   books: IBook[];
}
