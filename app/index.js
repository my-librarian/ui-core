import angular from 'angular';
import ocLazyLoad from 'oclazyload';
import ngTranslate from 'angular-translate';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

import adminRoutes from './views/admin/routes';
import app from './views/app';
import authorsRoutes from './views/authors/routes';
import booksRoutes from './views/books/routes';
import common from './common';
import home from './views/home';
import login from './views/login';
import profileRoutes from './views/profile/routes';
import subjectsRoutes from './views/subjects/routes';

import './styles/less/base.less';
import './styles/less/widgets.less';
import './styles/css/material/material-icons.css';

import './progressive';

const appName = 'librarian';

angular.module(appName, [
  ngTranslate,
  ocLazyLoad,
  uiBootstrap,
  uiRouter,
  adminRoutes,
  app,
  authorsRoutes,
  booksRoutes,
  common,
  home,
  login,
  profileRoutes,
  subjectsRoutes
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName], {strictDi: true}));
