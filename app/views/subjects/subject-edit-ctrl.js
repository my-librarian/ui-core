/*@ngInject*/
export default class SubjectEditCtrl {

  constructor($state, SubjectsSvc) {

    this.$state = $state;
    this.SubjectsSvc = SubjectsSvc;

    this.getSubject();
  }

  getSubject() {

    this.SubjectsSvc.getSubject(this.$state.params.id)
      .then(subject => this.subject = subject);
  }

  updateSubject() {

    this.SubjectsSvc.updateSubject(this.subject)
      .then(() => this.$state.go('subjects.subject', {id: this.subject.subjectid}));
  }
}
