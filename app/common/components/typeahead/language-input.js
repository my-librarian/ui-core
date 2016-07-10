import template from './input.html';

/*@ngInject*/
function languageInput(LanguageSvc) {

  function link($scope) {

    LanguageSvc.getLanguages()
      .then(languages => $scope.items = languages);
  }

  return {
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
