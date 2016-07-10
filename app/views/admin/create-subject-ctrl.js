/*@ngInject*/
export default class CreateSubjectCtrl {

  constructor(AlertsSvc, SubjectsSvc) {

    this.AlertsSvc = AlertsSvc;
    this.SubjectsSvc = SubjectsSvc;
  }

  createSubject(subject, done) {

    this.SubjectsSvc.createSubject(subject)
      .then(response => this.AlertsSvc.addAlert(`Successfully added subject. Click <a ui-sref="subjects.details({id: ${response.id}})">here</a> to open`))
      .then(done);
  }
}
