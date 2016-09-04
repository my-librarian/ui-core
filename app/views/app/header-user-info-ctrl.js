/*@ngInject*/
export default class HeaderUserInfoCtrl {

  constructor($translate, LoginSvc) {

    this.$translate = $translate;
    this.LoginSvc = LoginSvc;

    this.user = LoginSvc.user;
    this.language = 'en';

  }

  setLanguage() {

    this.$translate.use(this.language);
  }

  logout() {

    this.LoginSvc.stopSession();
  }
}
