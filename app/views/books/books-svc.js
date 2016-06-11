export default class BooksSvc {

  constructor($http) {

    this.$http = $http;
  }

  applyFilters(filters) {

    return this.$http
      .put('/api/books', filters)
      .then(response => response.data);
  }

  createBook(book) {

    return this.$http
      .post('/api/book', book)
      .then(response => response.data);
  }

  getBook(bookId) {

    return this.$http
      .get(`/api/book/${bookId}`)
      .then(response => response.data);
  }

  getBooks() {

    return this.$http
      .get('/api/books/list')
      .then(response => response.data);
  }

  getFilters() {

    return this.$http
      .get('/api/books/filters')
      .then(response => response.data);
  }
}
