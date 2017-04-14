import angular from 'angular';

import ProfileSvc from './profile-svc';
import profile from './profile';

import './profile.less';

export default angular.module('profile', [])
  .directive(...profile)
  .service('ProfileSvc', ProfileSvc)
  .name;
