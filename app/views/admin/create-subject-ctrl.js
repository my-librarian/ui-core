/*@ngInject*/
export default class CreateSubjectCtrl {

  constructor(SubjectsSvc) {

    this.SubjectsSvc = SubjectsSvc;
  }

  createSubject({name}, done) {

    this.SubjectsSvc.createSubject(name)
      .then(done);
  }
}
