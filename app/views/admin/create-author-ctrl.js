/*@ngInject*/
export default class CreateAuthorCtrl {

  constructor(AlertsSvc, AuthorsSvc) {

    this.AlertsSvc = AlertsSvc;
    this.AuthorsSvc = AuthorsSvc;
  }

  createAuthor(author, done) {

    this.AuthorsSvc.createAuthor(author)
      .then(done);
  }
}
