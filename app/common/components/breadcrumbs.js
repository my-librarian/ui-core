import template from './breadcrumbs.html';
import './breadcrumbs.less';

/*@ngInject*/
function breadcrumbs(BreadcrumbsSvc) {

  const names = {
    'authors.list': 'Authors List',
    'books.list': 'Books List',
    'subjects.list': 'Subjects List',
    'authors.details': 'An author',
    'books.details': 'A book',
    'subjects.details': 'A subject'
  };

  return {
    restrict: 'E',
    link($scope) {

      $scope.history = BreadcrumbsSvc.history;

      $scope.getPrettyName = key => names[key];
    },
    template
  };
}

export default [
  'breadcrumbs',
  breadcrumbs
];
