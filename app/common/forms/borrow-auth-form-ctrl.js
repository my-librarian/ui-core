export default class BorrowAuthCtrl {

  constructor(LoginSvc) {

    this.LoginSvc = LoginSvc;
  }
  
  authorizeUser() {

    const noSession = 0;

    this.LoginSvc.loginUser(this.iDeptNo, btoa(this.iPass), noSession)
      .then(() => this.onSuccess({deptNo: this.iDeptNo, timespan: this.timespan}))
      .catch(() => this.error = 'Invalid issuer id or password');
  }
}
