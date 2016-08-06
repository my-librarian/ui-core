/*@ngInject*/
export default class BooksSvc {

  constructor(AlertsSvc, $http, $q) {

    this.AlertsSvc = AlertsSvc;
    this.$http = $http;
    this.$q = $q;
  }

  static formatDate(date) {

    return date && new Date(`${date} UTC`);
  }

  getCondition(condition) {

    return {
      good: 'Good',
      damaged: 'Damaged',
      tbr: 'To be replaced'
    }[condition.toLowerCase()];
  }

  getBinding(cover) {

    return {
      paper: 'Paper Binding',
      hard: 'Hard Binding'
    }[cover.toLowerCase()];
  }

  getSource(source) {

    return {
      cl: 'Central Library',
      dc: 'Donated',
      cc: 'Complemented',
      ot: 'Other'
    }[source.toLowerCase()];
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
      .then(response => response.data)
      .then(response => this.AlertsSvc.addAlert(`Successfully added book. Click <a ui-sref="books.details({id: ${response.id}})">here</a> to open`))
      .catch(response => {
        this.AlertsSvc.addAlert(`Failed to create book. ${response.message}`, 'error');
        this.$q.reject(response);
      });
  }

  deleteBook(id) {

    return this.$http.delete(`/api/book/${id}`)
      .then(() => this.AlertsSvc.addAlert('Successfully deleted book'))
      .catch(response => {
        this.AlertsSvc.addAlert(`Failed to delete book. ${response.message}`, 'error');
        this.$q.reject(response);
      });
  }

  getBook(bookId) {

    return this.$http
      .get(`/api/book/${bookId}`)
      .then(response => response.data)
      .then(response => {

        response.original = !!response.original;

        return response;
      });
  }

  getBooks() {

    return this.$http
      .get('/api/books/list')
      .then(response => response.data);
  }

  getBorrowHistory(bookId) {

    return this.$http
      .get(`/api/borrow/${bookId}`)
      .then(response => response.data)
      .then(response => response.map(row => ({
        ...row,
        borrowdate: BooksSvc.formatDate(row.borrowdate),
        returndate: BooksSvc.formatDate(row.returndate)
      })))
      .then(response => {

        if (!response.length) {
          this.AlertsSvc.addAlert('Book does not have a borrow history', 'warning');
        }

        return response;
      });
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

  returnBook(borrowid, receiverid, penalty) {

    return this.$http
      .put(`/api/borrow/${borrowid}/${receiverid}`, {penalty})
      .then(response => response.data);
  }

  updateBook(book) {

    return this.$http
      .put(`/api/book/${book.bookid}`, book)
      .then(response => response.data);
  }
}
