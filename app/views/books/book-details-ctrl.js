export default class BookDetailsCtrl {

  constructor($state, BooksSvc) {

    this.$state = $state;
    this.BooksSvc = BooksSvc;

    this.getBook();
  }

  getSubjectLink(id) {

    return this.$state.href('subjects.details', {id});
  }

  getBook() {

    this.BooksSvc.getBook(this.$state.params.id)
      .then(details => this.details = details);
  }

  deleteBook() {

    this.BooksSvc.deleteBook(this.details.bookid)
      .then(() => this.$state.go('books.list'));
  }
}
