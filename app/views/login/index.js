import angular from 'angular';

import LoginSvc from './login-svc';
import login from './login';
import loginRedirect from '../login/login-redirect';
import routes from './routes';

export default angular.module('login', [])
  .config(routes)
  .run(loginRedirect)
  .service('LoginSvc', LoginSvc)
  .directive(...login)
  .name;
