export default class LanguageSvc {

  constructor($http) {

    this.$http = $http;
  }

  getLanguages() {

    return this.$http
      .get('/api/languages')
      .then(response => response.data);
  }
}
