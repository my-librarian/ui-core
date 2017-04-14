const app = {
  name: 'app',
  abstract: true,
  template: '<app/>',
  resolve: {
    user: /*@ngInject*/(LoginSvc) => LoginSvc.startSession().catch(() => ({}))
  }
};

/*@ngInject*/
export default function routes($stateProvider) {

  $stateProvider
    .state(app);
}
