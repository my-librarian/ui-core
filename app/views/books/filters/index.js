import angular from 'angular';

import availability from './availability';
import checkboxList from './checkbox-list';
import booksFilters from './filters';
import rackGrid from './rack-grid';
import searchInput from './search-input';

export default angular.module('books.filters', [])
  .directive(...availability)
  .directive(...booksFilters)
  .directive(...checkboxList)
  .directive(...rackGrid)
  .directive(...searchInput)
  .name;
