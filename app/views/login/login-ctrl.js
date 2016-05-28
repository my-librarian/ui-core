export default class LoginCtrl {

  constructor($state, LoginSvc) {

    this.$state = $state;
    this.LoginSvc = LoginSvc;

    this.checkLogin();

  }

  registerUser() {

    this.error = '';

    if (this.rUPass === this.rCPass) {

      const user = {
        name: this.rName,
        deptNo: this.rDeptNo,
        pass: btoa(this.rUPass)
      };

      this.LoginSvc.registerUser(user);
    } else {

      this.registerError = 'Passwords do not match';
      this.rUPass = '';
      this.rCPass = '';
    }
  }

  loginUser() {

    if (this.lDeptNo && this.lUPass) {

      this.LoginSvc.loginUser(this.lDeptNo, btoa(this.lUPass))
        .then(() => {
          this.loginError = false;
          this.LoginSvc.startSession();
          this.goToHome();
        })
        .catch(() => {
          this.loginError = true;
          this.lUPass = '';
        });
    }
  }

  goToHome() {

    this.$state.go('home');
  }

  checkLogin() {

    if (this.LoginSvc.userDetails.userid) {
      this.goToHome();
    }
  }
}
