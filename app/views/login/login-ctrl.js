export default class LoginCtrl {

  constructor(LoginSvc) {

    this.LoginSvc = LoginSvc;
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
        })
        .catch(() => {
          this.loginError = true;
          this.lUPass = '';
        });
    }
  }
}
