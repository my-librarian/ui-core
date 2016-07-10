export default class CreateBookCtrl {

  constructor(AlertsSvc, BooksSvc) {

    this.AlertsSvc = AlertsSvc;
    this.BooksSvc = BooksSvc;
  }

  createBook(book, done) {

    this.BooksSvc.createBook(book)
      .then(response => this.AlertsSvc.addAlert(`Successfully added book. Click <a ui-sref="books.details({id: ${response.id}})">here</a> to open`))
      .then(done);
  }
}
