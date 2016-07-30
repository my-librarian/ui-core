/*@ngInject*/
export default class LoginSvc {

  constructor($http) {

    this.$http = $http;

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

  get userLevel() {

    const self = this;

    return {

      get isAdmin() {

        const adminLevel = 3;

        return Number(self.user.details.level) === adminLevel;
      },

      get isModerator() {

        const userLevel = 1;

        return self.user.details.level > userLevel;
      },

      get isUser() {

        return !!self.user.details.userid;
      }
    };
  }
}

