export default class HeaderUserInfoCtrl {

  constructor($scope, LoginSvc) {

    this.LoginSvc = LoginSvc;

    this.userDetails = LoginSvc.userDetails;

    $scope.$on('session/update', (event, userDetails) => {
      this.userDetails = userDetails;
    });
  }

  logout() {

    this.LoginSvc.stopSession();
  }
}
