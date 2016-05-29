const app = {
  name: 'app',
  abstract: true,
  template: '<app></app>',
  resolve: {
    userDetails: (LoginSvc) => LoginSvc.startSession().catch(() => ({}))
  }
};

export default function routes($stateProvider) {

  $stateProvider
    .state(app);
}
