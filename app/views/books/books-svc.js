/*@ngInject*/
export default class BooksSvc {

  constructor($http) {

    this.$http = $http;
  }

  applyFilters(filters) {

    return this.$http
      .put('/api/books', filters)
      .then(response => response.data);
  }

  borrowBook(userid, issuerid, bookid, timespan) {

    const postArgs = {
      userid,
      issuerid,
      bookid,
      timespan
    };

    return this.$http
      .post('/api/borrow', postArgs)
      .then(response => response.data);

  }

  createBook(book) {

    return this.$http
      .post('/api/book', book)
      .then(response => response.data);
  }

  deleteBook(id) {

    return this.$http.delete(`/api/book/${id}`);
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

  getBorrowedBooks() {

    return this.$http
      .get('/api/books/borrowed')
      .then(response => response.data);
  }

  getFilters() {

    return this.$http
      .get('/api/books/filters')
      .then(response => response.data);
  }

  returnBook(borrowid, receiverid) {

    return this.$http
      .put(`/api/borrow/${borrowid}/${receiverid}`)
      .then(response => response.data);
  }
}
