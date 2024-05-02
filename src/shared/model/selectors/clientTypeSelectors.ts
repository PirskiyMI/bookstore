import { createSelector } from '@reduxjs/toolkit';

const selector = (state: RootState) => state.clientType;

export const clientTypeSelector = createSelector([selector], (selector) => selector.clientType);
