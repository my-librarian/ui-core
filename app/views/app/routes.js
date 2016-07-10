const app = {
  name: 'app',
  abstract: true,
  template: '<app></app>',
  resolve: {
    user: (LoginSvc) => LoginSvc.startSession().catch(() => ({}))
  }
};

/*@ngInject*/
export default function routes($stateProvider) {

  $stateProvider
    .state(app);
}
