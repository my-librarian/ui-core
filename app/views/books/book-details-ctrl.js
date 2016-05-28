export default class BookDetailsCtrl {

  constructor($stateParams, BooksSvc) {

    BooksSvc.getBook($stateParams.id)
      .then(details => this.details = details);
  }
}
