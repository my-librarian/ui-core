export default class ReturnAuthCtrl {

  constructor(LoginSvc) {

    this.LoginSvc = LoginSvc;
  }
  
  authorizeUser() {

    const noSession = 0;

    this.LoginSvc.loginUser(this.iDeptNo, btoa(this.iPass), noSession)
      .then(() => this.onSuccess({deptNo: this.iDeptNo}))
      .catch(() => this.error = 'Invalid issuer id or password');
  }
}
