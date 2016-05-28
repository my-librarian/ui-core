import angular from 'angular';

import LoginSvc from './login-svc';
import login from './login';
import routes from './routes';

export default angular.module('login', [])
  .config(routes)
  .service('LoginSvc', LoginSvc)
  .directive(...login)
  .name;
