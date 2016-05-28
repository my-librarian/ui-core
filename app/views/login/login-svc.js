export default class LoginSvc {

  constructor($http) {

    this.$http = $http;

    this.userDetails = {};
  }

  registerUser(user) {

    return this.$http
      .post('/api/user', user);
  }

  loginUser(deptNo, pass) {

    return this.$http
      .get(`/api/user/${deptNo}/${pass}`);
  }

  startSession() {

    return this.$http
      .get('/api/session')
      .then(response => response.data)
      .then(data => this.userDetails = data);
  }

  stopSession() {

    return this.$http
      .put('/api/session/stop')
      .then(() => this.userDetails = {});
  }
}
