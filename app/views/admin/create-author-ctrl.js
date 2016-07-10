export default class CreateAuthorCtrl {

  constructor(AlertsSvc, AuthorsSvc) {

    this.AlertsSvc = AlertsSvc;
    this.AuthorsSvc = AuthorsSvc;
  }

  createAuthor(author, done) {

    this.AuthorsSvc.createAuthor(author)
      .then(response => this.AlertsSvc.addAlert(`Successfully added author. Click <a ui-sref="authors.details({id: ${response.id}})">here</a> to open`))
      .then(done);
  }
}
