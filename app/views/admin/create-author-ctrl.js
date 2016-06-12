export default class CreateAuthorCtrl {

  constructor(AuthorsSvc) {

    this.AuthorsSvc = AuthorsSvc;
  }

  createAuthor(author, done) {

    this.AuthorsSvc.createAuthor(author)
      .then(done);

  }
}
