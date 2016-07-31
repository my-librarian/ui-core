import controller from './home-ctrl';
import template from './home.html';

/*@ngInject*/
function home(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('Home');
    },
    controllerAs: 'vm',
    restrict: 'E',
    controller,
    template
  };
}

export default [
  'home',
  home
];
