const login = {
  name: 'login',
  url: '/login',
  template: '<login></login>'
};

export default function routes($stateProvider) {

  $stateProvider
    .state(login);
}
