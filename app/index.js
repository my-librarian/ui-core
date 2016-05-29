import angular from 'angular';
import uiRouter from 'angular-ui-router';

import app from './views/app';
import authors from './views/authors';
import books from './views/books';
import common from './common';
import home from './views/home';
import login from './views/login';
import subjects from './views/subjects';

import './styles/less/base.less';
import './styles/css/material/material-icons.css';

const appName = 'librarian';

angular.module(appName, [
  uiRouter,
  app,
  authors,
  books,
  common,
  home,
  login,
  subjects
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName]));
