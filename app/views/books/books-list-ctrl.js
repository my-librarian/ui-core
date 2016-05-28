export default class BooksListCtrl {

  constructor(BooksSvc) {

    BooksSvc.getBooks()
      .then(books => this.books = books);
  }
}
