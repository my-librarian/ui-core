import angular from 'angular';

import AuthorsSvc from './authors-svc';
import author from './author';
import authorDetails from './author-details';
import authorEdit from './author-edit';
import authors from './authors';
import authorsList from './authors-list';

export default angular.module('authors', [])
  .directive(...author)
  .directive(...authorDetails)
  .directive(...authorEdit)
  .directive(...authors)
  .directive(...authorsList)
  .service('AuthorsSvc', AuthorsSvc)
  .name;
