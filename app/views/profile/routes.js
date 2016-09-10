const profile = {
  parent: 'app',
  name: 'profile',
  url: '/profile/:id/:name?',
  template: '<profile></profile>'
};

/*@ngInject*/
export default function routes($stateProvider) {

  $stateProvider
    .state(profile);
}
