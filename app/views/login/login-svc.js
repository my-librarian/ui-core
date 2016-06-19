export default class LoginSvc {

  constructor($http, $rootScope) {

    this.$http = $http;
    this.$rootScope = $rootScope;

    this.user = {};
  }

  loginUser(deptNo, pass) {

    return this.$http
      .get(`/api/user/${deptNo}/${pass}/1`);
  }

  registerUser(user) {

    return this.$http
      .post('/api/user', user);
  }

  startSession() {

    return this.$http.get('/api/session')
      .then(response => response.data)
      .then(data => this.user.details = data);
  }

  stopSession() {

    return this.$http
      .put('/api/session/stop')
      .then(() => this.user.details = {});
  }
}
