export default class ReturnBooksCtrl {

  constructor(BooksSvc, LoginSvc) {

    this.BooksSvc = BooksSvc;
    this.LoginSvc = LoginSvc;

    this.getBorrowedBooks();
  }

  getBorrowedBooks() {

    this.BooksSvc.getBorrowedBooks()
      .then(books => this.books = books);
  }

  returnBook(book, index) {

    this.BooksSvc.returnBook(book.borrowid, this.LoginSvc.user.details.userid)
      .then(() => this.books.splice(index, 1));
  }
}
