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

  canBorrow() {

    return this.LoginSvc.userLevel.isUser && !this.isBorrowed();
  }

  canEdit() {

    return this.LoginSvc.userLevel.isModerator && !this.isBorrowed();
  }

  canReturn() {

    return this.LoginSvc.userLevel.isUser && this.isBorrowed() && this.details.borrowedByCurrentUser;
  }

  canViewHistory() {

    return this.LoginSvc.userLevel.isModerator;
  }

  deleteBook() {

    this.BooksSvc.deleteBook(this.details.bookid)
      .then(() => this.$state.go('books.list'));
  }

  getBook() {

    this.details = {};

    this.BooksSvc.getBook(this.$state.params.id)
      .then(details => {

        this.isElectronicCopy = details.copy === 'EC';

        details.binding = this.BooksSvc.getBinding(details.binding);
        details.condition = this.BooksSvc.getCondition(details.condition);
        details.copy = this.BooksSvc.getCopy(details.copy);
        details.source = this.BooksSvc.getSource(details.source);

        details.description = details.description.replace(/\{br\}/g, '\n');

        this.details = details;
        this.$state.params.context = details.title;
      });
  }

  getBorrowHistory() {

    this.BooksSvc.getBorrowHistory(this.$state.params.id)
      .then(history => this.history = history);
  }

  getSubjectLink(id) {

    return this.$state.href('subjects.details', {id});
  }

  isBorrowed() {
    return this.details.borrowid;
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
