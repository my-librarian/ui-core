/*@ngInject*/
export default class BooksListCtrl {

  constructor($stateParams, BooksSvc, LoginSvc) {

    this.BooksSvc = BooksSvc;
    this.LoginSvc = LoginSvc;

    this.search = {
      title: $stateParams.q
    };

    this.getBooks();
    this.clearFilters();
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
}
