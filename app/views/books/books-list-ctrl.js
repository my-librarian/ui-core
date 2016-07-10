/*@ngInject*/
export default class BooksListCtrl {

  constructor(BooksSvc) {

    this.BooksSvc = BooksSvc;

    this.getBooks();
    this.clearFilters();
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
