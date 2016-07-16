/*@ngInject*/
export default class ReturnAuthCtrl {

  constructor(LoginSvc) {

    this.LoginSvc = LoginSvc;
  }
  
  authorizeUser() {

    const noSession = 0;

    this.LoginSvc.loginUser(this.rDeptNo, btoa(this.rPass), noSession)
      .then(() => this.onSuccess({deptNo: this.rDeptNo, penalty: this.penalty}))
      .catch(() => this.error = 'Invalid issuer id or password');
  }
}
