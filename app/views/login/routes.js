const login = {
  parent: 'app',
  name: 'login',
  url: '/login',
  template: '<login/>'
};

/*@ngInject*/
export default function routes($stateProvider) {

  $stateProvider
    .state(login);
}
