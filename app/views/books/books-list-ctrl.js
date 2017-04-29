/*@ngInject*/
export default class BooksListCtrl {

  constructor(BooksSvc, FilterSvc, LoginSvc, UrlSvc, $q) {

    this.BooksSvc = BooksSvc;
    this.FilterSvc = FilterSvc;
    this.LoginSvc = LoginSvc;
    this.UrlSvc = UrlSvc;
    this.$q = $q;

    this.ITEMS_PER_PAGE = 20;

    this.getBooks();
  }

  applyFilters(filters) {

    this.filters = filters;

    this.onFiltersChange();
  }

  canAdd() {

    return this.LoginSvc.userLevel.isModerator;
  }

  clearFilters() {

    this.$q(resolve => resolve({
      authors: this.filters.authors.map(this.FilterSvc.deselect),
      availability: 'all',
      currentPage: 1,
      languages: this.filters.languages.map(this.FilterSvc.deselect),
      racks: this.filters.racks.map(this.FilterSvc.deselect),
      searchString: '',
      subjects: this.filters.subjects.map(this.FilterSvc.deselect)
    })).then(filters => this.applyFilters(filters));
  }

  filterBooks(book) {

    return [
      () => this.FilterSvc.staticFilter(book, this.filters.searchString),
      () => this.FilterSvc.authorFilter(book, this.filters.authors, this.data.authorAssoc),
      () => this.FilterSvc.subjectFilter(book, this.filters.subjects, this.data.subjectAssoc),
      () => this.FilterSvc.languageFilter(book, this.filters.languages),
      () => this.FilterSvc.availabilityFilter(book, this.filters.availability),
      () => this.FilterSvc.rackFilter(book, this.filters.racks)
    ].every(condition => condition());
  }

  getBooks() {

    this.BooksSvc.getBooks()
      .then(data => {

        this.data = data;
        this.data.authorAssoc = this.data.authorAssoc.reduce((assoc, author) => {
          assoc[author.authorid] = author.books.split(',').map(id => parseInt(id));
          return assoc;
        }, {});
        this.data.subjectAssoc = this.data.subjectAssoc.reduce((assoc, subject) => {
          assoc[subject.subjectid] = subject.books.split(',').map(id => parseInt(id));
          return assoc;
        }, {});

        return {
          authors: data.authors,
          availability: 'all',
          currentPage: 1,
          languages: data.languages,
          racks: data.racks,
          searchString: '',
          subjects: data.subjects
        };
      })
      .then(filters => this.UrlSvc.parseUrl(filters))
      .then(filters => this.applyFilters(filters));

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

    this.UrlSvc.updateUrl(this.filters);

    this.$q(
      resolve => resolve(this.data.books.filter(
        book => this.filterBooks(book)
      ))
    ).then(books => this.filteredBooks = books);
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
