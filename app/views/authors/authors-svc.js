export default class AuthorsSvc {

  constructor($http) {

    this.$http = $http;
  }

  getAuthors() {

    return this.$http
      .get('/api/authors')
      .then(response => response.data);
  }

  getAuthor(authorId) {

    return this.$http
      .get(`/api/author/${authorId}`)
      .then(response => response.data);
  }
}
