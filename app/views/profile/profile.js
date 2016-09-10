import template from './profile.html';
import controller from './profile-ctrl';

/*@ngInject*/
function profile(TitleSvc) {

  return {
    link() {
      TitleSvc.setTitle('User Profile');
    },
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    template
  };
}

export default [
  'profile',
  profile
];
