import template from './input.html';
import controller from './input-ctrl';

/*@ngInject*/
function languageInput(LanguageSvc) {

  function link($scope, $elem, $attr, vm) {

    LanguageSvc.getLanguages()
      .then(languages => vm.items = languages);
  }

  return {
    bindToController: true,
    controller,
    controllerAs: 'vm',
    link,
    restrict: 'E',
    template,
    scope: {
      model: '='
    }
  };
}

export default [
  'languageInput',
  languageInput
];
