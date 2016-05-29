export default class AuthorsListCtrl {

  constructor($filter, AuthorsSvc) {

    this.authors = {};

    AuthorsSvc.getAuthors()
      .then(authors => this.authors = $filter('alphabetic')(authors));
  }
}
