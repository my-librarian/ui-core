/*@ngInject*/
export default class AuthorsListCtrl {

  constructor($filter, AuthorsSvc, LoginSvc) {

    this.LoginSvc = LoginSvc;

    this.authors = {};

    AuthorsSvc.getAuthors()
      .then(authors => {
        this.authorCount = authors.length;
        this.authors = $filter('alphabetic')(authors);
      });
  }

  canAdd() {

    return this.LoginSvc.userLevel.isModerator;
  }
}
