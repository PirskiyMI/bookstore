interface IArguments {
   pages: number[];
   currentPage: number;
   totalPage: number;
}

export const createPages = ({ pages, currentPage, totalPage }: IArguments) => {
   if (totalPage > 6) {
      if (currentPage > 4) {
         for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pages.push(i);
            if (i === totalPage) break;
         }
      } else {
         for (let i = 1; i <= 6; i++) {
            pages.push(i);
            if (i === totalPage) break;
         }
      }
   } else {
      for (let i = 1; i <= 6; i++) {
         pages.push(i);
      }
   }
};
