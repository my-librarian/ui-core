export default class CreateBookCtrl {

  constructor(BooksSvc) {

    this.BooksSvc = BooksSvc;
  }

  createBook(book, done) {

    this.BooksSvc.createBook(book)
      .then(done);

  }
}
