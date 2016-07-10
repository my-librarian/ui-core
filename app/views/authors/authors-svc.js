/*@ngInject*/
export default class AuthorsSvc {

  constructor($http) {

    this.$http = $http;
  }

  createAuthor(author) {

    return this.$http
      .post('/api/author', {author})
      .then(response => response.data);
  }

  deleteAuthor(id) {

    return this.$http.delete(`/api/author/${id}`);
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
