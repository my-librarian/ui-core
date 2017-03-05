/*@ngInject*/
export default class BooksListCtrl {

  constructor(BooksSvc, LoginSvc, UrlSvc) {

    this.BooksSvc = BooksSvc;
    this.LoginSvc = LoginSvc;
    this.UrlSvc = UrlSvc;

    this.getBooks();
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

  getBooks() {

    this.loading = true;

    this.BooksSvc.getFilters()
      .then(filters => this.filters = filters)
      .then(() => this.UrlSvc.parseUrl(this.filters))
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

  hasValidSearchString() {

    const {searchString} = this.filters;

    return [
      searchString === '',
      /^r\d/i.test(searchString),
      searchString.trim().length > 0
    ].some(condition => condition);
  }

  onFiltersChange() {

    this.filters.page = 1;
    this.allLoaded = false;
    this.books = [];

    this.UrlSvc.updateUrl(this.filters);
    this.applyFilters();
  }

  onSearchStringChange() {

    if (this.hasValidSearchString()) {
      this.onFiltersChange();
    }
  }

  toggleFilters() {

    this.showFilters = !this.showFilters;
  }
}
