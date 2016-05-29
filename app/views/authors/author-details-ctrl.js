export default class AuthorDetailsCtrl {

  constructor($stateParams, AuthorsSvc) {

    AuthorsSvc.getAuthor($stateParams.id)
      .then(details => this.details = details);
  }
}
