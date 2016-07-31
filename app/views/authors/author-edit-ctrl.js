/*@ngInject*/
export default class AuthorEditCtrl {

  constructor($state, AuthorsSvc) {

    this.$state = $state;
    this.AuthorsSvc = AuthorsSvc;

    this.getAuthor();
  }

  getAuthor() {

    this.AuthorsSvc.getAuthor(this.$state.params.id)
      .then(author => this.author = author);
  }

  updateAuthor() {

    this.AuthorsSvc.updateAuthor(this.author)
      .then(() => this.$state.go('authors.details', {id: this.author.authorid}));
  }
}
