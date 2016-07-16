import './authors.less';

/*@ngInject*/
function authors(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Authors');
    },
    restrict: 'E',
    template: '<ui-view />'
  };
}

export default [
  'authors',
  authors
];
