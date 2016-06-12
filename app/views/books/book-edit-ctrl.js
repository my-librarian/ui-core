export default class BookEditCtrl {

  constructor($state, BooksSvc) {

    this.$state = $state;
    this.BooksSvc = BooksSvc;

    this.getBook();
  }

  getBook() {

    this.BooksSvc.getBook(this.$state.params.id)
      .then(book => {

        const adddate = new Date(book.adddate);

        adddate.setMinutes(adddate.getTimezoneOffset());

        book.adddate = adddate;

        this.book = book;
      });
  }

  updateBook() {

    this.BooksSvc.updateBook(this.book)
      .then(() => this.$state.go('books.book', {id: this.book.bookid}));
  }
}
