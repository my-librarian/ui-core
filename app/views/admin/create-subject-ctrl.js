/*@ngInject*/
export default class CreateSubjectCtrl {

  constructor(SubjectsSvc) {

    this.SubjectsSvc = SubjectsSvc;
  }

  createSubject(subject, done) {

    this.SubjectsSvc.createSubject(subject)
      .then(done);
  }
}
