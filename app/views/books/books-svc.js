export default class BooksSvc {

  constructor($http) {

    this.$http = $http;
  }

  getBooks() {

    return this.$http
      .get('/api/books')
      .then(response => response.data);
  }

  getBook(bookId) {

    return this.$http
      .get(`/api/book/${bookId}`)
      .then(response => response.data);
  }
}
