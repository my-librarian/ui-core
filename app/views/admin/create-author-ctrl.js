/*@ngInject*/
export default class CreateAuthorCtrl {

  constructor(AlertsSvc, AuthorsSvc) {

    this.AlertsSvc = AlertsSvc;
    this.AuthorsSvc = AuthorsSvc;
  }

  createAuthor({name}, done) {

    this.AuthorsSvc.createAuthor(name)
      .then(done);
  }
}
