const home = {
  parent: 'app',
  name: 'home',
  url: '/home',
  template: '<home></home>'
};

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(home);

  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.otherwise('/home');
}