/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('categorySelection');

const makeSelectCategoryName = () => createSelector(
  selectCategory,
  (categoryState) => categoryState.get('categoryName')
);

export {
  selectCategory,
  makeSelectCategoryName,
};
