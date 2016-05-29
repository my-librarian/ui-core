import angular from 'angular';

import AuthorsSvc from './authors-svc';
import author from './author';
import authorDetails from './author-details';
import authors from './authors';
import authorsList from './authors-list';
import routes from './routes';

export default angular.module('authors', [])
  .config(routes)
  .directive(...author)
  .directive(...authorDetails)
  .directive(...authors)
  .directive(...authorsList)
  .service('AuthorsSvc', AuthorsSvc)
  .name;
