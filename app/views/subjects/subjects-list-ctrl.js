/*@ngInject*/
export default class SubjectsListCtrl {

  constructor($filter, LoginSvc, SubjectsSvc) {

    this.LoginSvc = LoginSvc;

    this.subjects = {};

    SubjectsSvc.getSubjects()
      .then(subjects => {
        this.subjectCount = subjects.length;
        this.subjects = $filter('alphabetic')(subjects);
      });
  }

  canAdd() {

    return this.LoginSvc.userLevel.isModerator;
  }
}
