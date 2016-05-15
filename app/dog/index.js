import angular from 'angular';

import dogElement from './dog';

export default angular.module('dog', [])
  .directive('dog', dogElement)
  .name;
