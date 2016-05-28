export default class LoginSvc {

  constructor($http) {

    this.$http = $http;
  }

  registerUser(user) {

    return this.$http
      .post('/api/user', user);
  }

  loginUser(deptNo, pass) {

    return this.$http
      .get('/api/user/' + deptNo + '/' + pass);
  }
}
