import { createSelector } from '@reduxjs/toolkit';

const bookInformationSelector = (state: RootState) => state.bookInformation;

export const bookInformationLoadingSelector = createSelector(
   [bookInformationSelector],
   (selector) => selector.loading,
);

export const bookInformationErrorSelector = createSelector(
   [bookInformationSelector],
   (selector) => selector.error,
);

export const bookInformationDataSelector = createSelector(
   [bookInformationSelector],
   (selector) => selector.data,
);
