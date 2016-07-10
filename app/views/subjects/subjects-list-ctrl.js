/*@ngInject*/
export default class SubjectsListCtrl {

  constructor($filter, SubjectsSvc) {

    this.subjects = {};

    SubjectsSvc.getSubjects()
      .then(subjects => this.subjects = $filter('alphabetic')(subjects));
  }
}
