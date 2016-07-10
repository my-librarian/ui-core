/*@ngInject*/
export default class AuthorDetailsCtrl {

  constructor($state, AuthorsSvc) {

    this.$state = $state;
    this.AuthorsSvc = AuthorsSvc;

    this.getAuthor();
  }

  getAuthor() {

    this.AuthorsSvc.getAuthor(this.$state.params.id)
      .then(details => this.details = details);
  }

  deleteAuthor() {

    this.AuthorsSvc.deleteAuthor(this.details.authorid)
      .then(() => this.$state.go('authors.list'));
  }
}
