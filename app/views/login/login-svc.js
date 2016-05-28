export default class LoginSvc {

  constructor($http, $rootScope) {

    this.$http = $http;
    this.$rootScope = $rootScope;

    this.userDetails = {};
  }

  loginUser(deptNo, pass) {

    return this.$http
      .get(`/api/user/${deptNo}/${pass}`);
  }

  registerUser(user) {

    return this.$http
      .post('/api/user', user);
  }

  startSession() {

    return this.$http
      .get('/api/session')
      .then(response => response.data)
      .then(data => this.userDetails = data)
      .then(() => this.broadcastSessionUpdate());
  }

  stopSession() {

    return this.$http
      .put('/api/session/stop')
      .then(() => this.userDetails = {})
      .then(() => this.broadcastSessionUpdate());
  }

  broadcastSessionUpdate() {

    this.$rootScope.$broadcast('session/update', this.userDetails);
  }
}
