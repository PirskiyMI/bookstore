import { createSelector } from '@reduxjs/toolkit';

const searchSelector = (state: RootState) => state.search;

export const searchDataSelector = createSelector([searchSelector], (selector) => selector.data);

export const searchErrorSelector = createSelector([searchSelector], (selector) => selector.error);

export const searchLoadingSelector = createSelector(
   [searchSelector],
   (selector) => selector.isLoading,
);
