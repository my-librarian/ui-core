import angular from 'angular';
import ngTranslate from 'angular-translate';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

import admin from './views/admin';
import app from './views/app';
import authors from './views/authors';
import books from './views/books';
import common from './common';
import home from './views/home';
import login from './views/login';
import profile from './views/profile';
import subjects from './views/subjects';

import './styles/less/base.less';
import './styles/less/widgets.less';
import './styles/css/material/material-icons.css';

const appName = 'librarian';

angular.module(appName, [
  ngTranslate,
  uiBootstrap,
  uiRouter,
  admin,
  app,
  authors,
  books,
  common,
  home,
  login,
  profile,
  subjects
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName], {strictDi: true}));
