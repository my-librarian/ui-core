/*@ngInject*/
export default class LoginSvc {

  constructor($http, $rootScope) {

    this.$http = $http;
    this.$rootScope = $rootScope;

    this.user = {};
  }

  loginUser(deptNo, pass, session = 1) {

    return this.$http
      .get(`/api/user/${deptNo}/${pass}/${session}`);
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
