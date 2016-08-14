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

  applyFilters() {

    const pageSize = 20;
    this.loading = true;

    this.BooksSvc.applyFilters(this.filters)
      .then(({list, count}) => {

        if (list.length < pageSize) {
          this.allLoaded = true;
        }

        this.booksCount = count;
        this.books = this.books.concat(list);
      })
      .finally(() => this.loading = false);
  }

  getMoreBooks() {

    this.filters.page += 1;

    this.applyFilters();
  }

  onFiltersChange() {

    this.filters.page = 1;
    this.allLoaded = false;
    this.books = [];

    this.applyFilters();
  }

  onSearchStringChange() {

    const minSearchLength = 2;

    if (this.filters.searchString.trim().length > minSearchLength) {
      this.onFiltersChange();
    }
  }

  extendFilters(params) {

    this.filters.searchString = params.q || '';
  }
}
