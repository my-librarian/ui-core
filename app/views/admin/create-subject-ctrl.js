export default class CreateSubjectCtrl {

  constructor(SubjectsSvc) {

    this.SubjectsSvc = SubjectsSvc;
  }

  createSubject() {

    this.SubjectsSvc.createSubject(this.subject)
      .then(() => {

        this.createSubjectForm.$setPristine();
        this.createSubjectForm.$setUntouched();
      });

  }
}
