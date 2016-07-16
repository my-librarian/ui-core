import template from './home.html';

/*@ngInject*/
function home(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Home');
    },
    restrict: 'E',
    template
  };
}

export default [
  'home',
  home
];
