import template from './filters.html';

import './filters.less';

const booksFilters = {
  restrict: 'E',
  template,
  scope: {
    clearFilters: '&onClearFilters',
    filters: '=',
    onChange: '&'
  }
};

export default [
  'booksFilters',
  () => booksFilters
];
