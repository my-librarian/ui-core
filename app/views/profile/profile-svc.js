/*@ngInject*/
export default class ProfileSvc {

  constructor($http) {

    this.$http = $http;
  }

  static formatDate(date) {

    return date && new Date(`${date} UTC`);
  }

  getUserData(id) {

    return this.$http
      .get(`/api/profile/${id}`)
      .then(response => response.data);
  }
}
