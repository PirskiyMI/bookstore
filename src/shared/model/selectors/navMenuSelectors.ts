import { createSelector } from '@reduxjs/toolkit';

const selector = (state: RootState) => state.navMenu;

export const isNavMenuOpenSelector = createSelector([selector], (selector) => selector.isOpen);
