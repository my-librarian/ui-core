/*@ngInject*/
export default class AuthorsSvc {

  constructor(AlertsSvc, $http, $q) {

    this.AlertsSvc = AlertsSvc;
    this.$http = $http;
    this.$q = $q;
  }

  createAuthor(author) {

    return this.$http
      .post('/api/author', {author})
      .then(response => response.data)
      .then(response => this.AlertsSvc.addAlert(`Successfully added author. Click <a ui-sref="authors.details({id: ${response.id}})">here</a> to open`))
      .catch(response => {
        this.AlertsSvc.addAlert(`Failed to create author. ${response.message}`, 'error');
        this.$q.reject(response);
      });
  }

  deleteAuthor(id) {

    return this.$http.delete(`/api/author/${id}`)
      .then(() => this.AlertsSvc.addAlert('Successfully deleted author'))
      .catch(response => {
        this.AlertsSvc.addAlert(`Failed to delete author. ${response.message}`, 'error');
        this.$q.reject(response);
      });
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

  updateAuthor(author) {

    return this.$http
      .put('/api/author', author)
      .then(response => response.data);
  }
}
