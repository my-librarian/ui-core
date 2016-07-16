/*@ngInject*/
export default class BookDetailsCtrl {

  constructor($state, BooksSvc, LoginSvc, ModalSvc) {

    this.$state = $state;
    this.BooksSvc = BooksSvc;
    this.LoginSvc = LoginSvc;
    this.ModalSvc = ModalSvc;

    this.getBook();
  }

  borrowBook() {

    this.ModalSvc.openBorrowModal(this.details.title)
      .then(([issuerid, timespan]) =>
        this.BooksSvc
          .borrowBook(this.LoginSvc.user.details.userid, issuerid, this.details.bookid, timespan)
          .then(({id}) => this.details.borrowid = id)
      );
  }

  deleteBook() {

    this.BooksSvc.deleteBook(this.details.bookid)
      .then(() => this.$state.go('books.list'));
  }

  getBook() {

    this.BooksSvc.getBook(this.$state.params.id)
      .then(details => this.details = details);
  }

  getBorrowHistory() {

    this.BooksSvc.getBorrowHistory(this.$state.params.id)
      .then(history => this.history = history);
  }

  getSubjectLink(id) {

    return this.$state.href('subjects.details', {id});
  }

  issueBook() {

    this.ModalSvc.openIssueModal(this.details.title)
      .then(([userid, timespan]) =>
        this.BooksSvc
          .borrowBook(userid, this.LoginSvc.user.details.userid, this.details.bookid, timespan)
          .then(({id}) => this.details.borrowid = id)
      );
  }

  returnBook() {

    this.ModalSvc.openReturnModal(this.details.title)
      .then(([receiverid, penalty]) =>
        this.BooksSvc
          .returnBook(this.details.borrowid, receiverid, penalty)
          .then(() => this.details.borrowid = null)
      );
  }
}
