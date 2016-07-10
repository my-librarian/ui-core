/*@ngInject*/
export default class HeaderUserInfoCtrl {

  constructor($scope, LoginSvc) {

    this.LoginSvc = LoginSvc;

    this.user = LoginSvc.user;

  }

  logout() {

    this.LoginSvc.stopSession();
  }
}
