import angular from 'angular';

import ProfileSvc from './profile-svc';
import profile from './profile';
import routes from './routes';

import './profile.less';

export default angular.module('profile', [])
  .config(routes)
  .directive(...profile)
  .service('ProfileSvc', ProfileSvc)
  .name;
