export default class SubjectDetailsCtrl {

  constructor($stateParams, SubjectsSvc) {

    SubjectsSvc.getSubject($stateParams.id)
      .then(details => this.details = details);
  }
}
