/*@ngInject*/
export default class BooksSvc {

  constructor(AlertsSvc, $http, $q) {

    this.AlertsSvc = AlertsSvc;
    this.$http = $http;
    this.$q = $q;
  }

  static formatDate(date) {

    return date && new Date(date);
  }

  static getCondition(condition) {

    return {
      good: 'Good',
      damaged: 'Damaged',
      tbr: 'To be replaced'
    }[condition.toLowerCase()];
  }

  static getBinding(cover) {

    return {
      paper: 'Paper Binding',
      hard: 'Hard Binding'
    }[cover.toLowerCase()];
  }

  static getSource(source) {

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

        response.binding = BooksSvc.getBinding(response.binding);
        response.condition = BooksSvc.getCondition(response.condition);
        response.source = BooksSvc.getSource(response.source);

        response.description = response.description.replace('{br}', '\n');

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
      })));
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
}
