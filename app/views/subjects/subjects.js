import './subjects.less';

/*@ngInject*/
function subjects(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Subjects');
    },
    restrict: 'E',
    template: '<ui-view />'
  };
}

export default [
  'subjects',
  subjects
];
