import './books.less';

/*@ngInject*/
function books(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Books');
    },
    restrict: 'E',
    template: '<ui-view />'
  };
}

export default [
  'books',
  books
];
