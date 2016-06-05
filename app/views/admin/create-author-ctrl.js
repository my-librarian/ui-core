export default class CreateAuthorCtrl {

  constructor(AuthorsSvc) {

    this.AuthorsSvc = AuthorsSvc;
  }

  createAuthor() {

    this.AuthorsSvc.createAuthor(this.author)
      .then(() => {

        this.createAuthorForm.$setPristine();
        this.createAuthorForm.$setUntouched();
      });

  }
}
