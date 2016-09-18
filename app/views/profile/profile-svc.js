/*@ngInject*/
export default class ProfileSvc {

  constructor($http) {

    this.$http = $http;
  }

  static getUserLevel(level) {

    return {
      1: 'User',
      2: 'Moderator',
      3: 'Administrator'
    }[level];
  }

  getUserData(id) {

    return this.$http
      .get(`/api/profile/${id}`)
      .then(response => response.data)
      .then(user => ({
        ...user,
        level: ProfileSvc.getUserLevel(user.level)
      }));
  }
}
