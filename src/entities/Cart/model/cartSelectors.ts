import { createSelector } from '@reduxjs/toolkit';

export const cartSelector = (state: RootState) => state.cart;

export const cartTotalPriceSelector = createSelector([cartSelector], (selector) => {
   let totalPrice = 0;

   for (const key in selector) {
      totalPrice += selector[key].count * +selector[key].price;
   }

   return totalPrice;
});

export const cartItemCountSelector = createSelector(
   [cartSelector, (_cartSelector, id: string) => id],
   (selector, id) => selector[id].count,
);
