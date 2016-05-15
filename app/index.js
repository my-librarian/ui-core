import angular from 'angular';

import app from './views/app';
import home from './views/home';

import './styles/less/base.less';
import './styles/css/material/material-icons.css';

const appName = 'librarian';

angular.module(appName, [
  app,
  home
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName]));
