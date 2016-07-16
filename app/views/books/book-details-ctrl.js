/*@ngInject*/
export default class BookDetailsCtrl {

  constructor($state, BooksSvc, LoginSvc, ModalSvc) {

    this.$state = $state;
    this.BooksSvc = BooksSvc;
    this.LoginSvc = LoginSvc;
    this.ModalSvc = ModalSvc;

    this.getBook();
  }

  static getCondition(condition) {

    return {
      good: 'Good',
      damaged: 'Damaged',
      tbr: 'To be replaced'
    }[condition.toLowerCase()];

  }

  static getBinding(cover) {

    return {
      paper: 'Paper Binding',
      hard: 'Hard Binding'
    }[cover.toLowerCase()];

  }

  static getSource(source) {

    return {
      cl: 'Central Library',
      dc: 'Donated',
      cc: 'Complemented',
      ot: 'Other'
    }[source.toLowerCase()];

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
      .then(details => {

        details.binding = BookDetailsCtrl.getBinding(details.binding);
        details.condition = BookDetailsCtrl.getCondition(details.condition);
        details.source = BookDetailsCtrl.getSource(details.source);

        details.description = details.description.replace('{br}', '\n');

        this.details = details;

      });
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
