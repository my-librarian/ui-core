import DogCtrl from './dog-ctrl';
import template from './dog.html';

export default function () {
  return {
    bindToController: true,
    controller: DogCtrl,
    controllerAs: 'vm',
    restrict: 'E',
    scope: {
      breed: '@'
    },
    template
  };
}
