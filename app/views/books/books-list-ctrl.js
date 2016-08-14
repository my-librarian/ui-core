/*@ngInject*/
export default class BooksListCtrl {

  constructor($stateParams, BooksSvc, LoginSvc) {

    this.BooksSvc = BooksSvc;
    this.LoginSvc = LoginSvc;

    this.getBooks($stateParams);
  }

  canAdd() {

    return this.LoginSvc.userLevel.isModerator;
  }

  clearFilters() {

    this.loading = true;

    this.BooksSvc.getFilters()
      .then(filters => this.filters = filters)
      .then(() => this.onFiltersChange());
  }

  getBooks(params) {

    this.loading = true;

    this.BooksSvc.getFilters()
      .then(filters => this.filters = filters)
      .then(() => this.extendFilters(params))
      .then(() => this.onFiltersChange());

  }

  getMoreBooks() {

    const pageSize = 20;

    this.loading = true;
    this.filters.page += 1;

    this.BooksSvc.applyFilters(this.filters)
      .then(books => {

        if (books.length < pageSize) {
          this.allLoaded = true;
        }

        this.books = this.books.concat(books);
      })
      .finally(() => this.loading = false);
  }

  onFiltersChange() {

    this.loading = true;
    this.filters.page = 1;
    this.allLoaded = false;

    this.BooksSvc.applyFilters(this.filters)
      .then(books => this.books = books)
      .finally(() => this.loading = false);
  }

  onSearchStringChange() {

    const minSearchLength = 2;

    if (this.filters.searchString.trim().length > minSearchLength) {
      this.onFiltersChange();
    }
  }

  extendFilters(params) {

    this.filters.searchString = params.q;
  }
}
