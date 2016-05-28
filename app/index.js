import angular from 'angular';
import uiRouter from 'angular-ui-router';

import app from './views/app';
import books from './views/books';
import home from './views/home';
import login from './views/login';

import './styles/less/base.less';
import './styles/css/material/material-icons.css';

const appName = 'librarian';

angular.module(appName, [
  uiRouter,
  app,
  books,
  home,
  login
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName]));
