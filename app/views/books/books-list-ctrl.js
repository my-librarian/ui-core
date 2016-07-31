/*@ngInject*/
export default class BooksListCtrl {

  constructor($stateParams, BooksSvc, LoginSvc) {

    this.BooksSvc = BooksSvc;
    this.LoginSvc = LoginSvc;

    this.query = $stateParams.q;

    this.getBooks();
    this.clearFilters();

    this.search = this.search.bind(this);
  }

  static matchAccessionNumber(accessno, query) {

    return accessno.toString().indexOf(query) !== -1;
  }

  static matchRackNumber(rackno, query) {

    query = query.replace(/-/g, '');
    rackno = rackno.replace(/-/g, '');

    return rackno.toLowerCase().indexOf(query) !== -1;
  }

  canAdd() {

    return this.LoginSvc.userLevel.isModerator;
  }

  clearFilters() {

    this.BooksSvc.getFilters()
      .then(filters => this.filters = filters);
  }

  getBooks() {

    this.BooksSvc.getBooks()
      .then(books => this.books = books);
  }

  onFiltersChange() {

    this.BooksSvc.applyFilters(this.filters)
      .then(books => this.books = books);
  }

  search(row) { // eslint-disable-line complexity

    const query = (this.query || '').toLowerCase();

    let match = false;

    match = match || row.title.toLowerCase().indexOf(query) !== -1;
    match = match || BooksListCtrl.matchAccessionNumber(row.accessno, query);
    match = match || BooksListCtrl.matchRackNumber(row.rackno, query);

    return match;
  }
}
