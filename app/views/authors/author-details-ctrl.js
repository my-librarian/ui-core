/*@ngInject*/
export default class AuthorDetailsCtrl {

  constructor($state, AuthorsSvc, LoginSvc) {

    this.$state = $state;
    this.AuthorsSvc = AuthorsSvc;
    this.LoginSvc = LoginSvc;

    this.getAuthor();
  }

  canEdit() {

    return this.LoginSvc.userLevel.isModerator;
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
