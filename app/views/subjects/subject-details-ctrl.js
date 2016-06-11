export default class SubjectDetailsCtrl {

  constructor($state, SubjectsSvc) {

    this.$state = $state;
    this.SubjectsSvc = SubjectsSvc;

    this.getSubject();
  }
  
  getSubject() {
    
    this.SubjectsSvc.getSubject(this.$state.params.id)
      .then(details => this.details = details);
  }
  
  deleteSubject() {

    this.SubjectsSvc.deleteSubject(this.details.subjectid)
      .then(() => this.$state.go('subjects.list'));
  }
}
