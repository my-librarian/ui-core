import angular from 'angular';

const profile = {
  parent: 'app',
  name: 'profile',
  url: '/profile/:id/:name?',
  template: '<profile/>',
  resolve: /*@ngInject*/($ocLazyLoad) => $ocLazyLoad.load([
    '/profile.js',
    '/profile.css'
  ])
};

/*@ngInject*/
function routes($stateProvider) {

  $stateProvider
    .state(profile);
}

export default angular.module('profile.routes', [])
  .config(routes)
  .name;
