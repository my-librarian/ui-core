import angular from 'angular';

import dog from './dog';

const appName = 'librarian';

angular.module(appName, [
  dog
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName]));
