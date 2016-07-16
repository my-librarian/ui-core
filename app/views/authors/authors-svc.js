/*@ngInject*/
export default class AuthorsSvc {

  constructor(AlertsSvc, $http) {

    this.AlertsSvc = AlertsSvc;
    this.$http = $http;
  }

  createAuthor(author) {

    return this.$http
      .post('/api/author', {author})
      .then(response => response.data)
      .then(response => this.AlertsSvc.addAlert(`Successfully added author. Click <a ui-sref="authors.details({id: ${response.id}})">here</a> to open`));
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
