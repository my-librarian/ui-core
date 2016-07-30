/*@ngInject*/
export default class SubjectDetailsCtrl {

  constructor($state, LoginSvc, SubjectsSvc) {

    this.$state = $state;
    this.LoginSvc = LoginSvc;
    this.SubjectsSvc = SubjectsSvc;

    this.getSubject();
  }

  canEdit() {

    return this.LoginSvc.userLevel.isModerator;
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
