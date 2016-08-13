import template from './app.html';

/*@ngInject*/
function app($document, $state) {

  function getKeyMap() {

    return {
      a: () => $state.go('authors.list'),
      b: () => $state.go('books.list'),
      h: () => $state.go('home'),
      l: () => $state.go('login'),
      s: () => $state.go('subjects.list')
    };
  }

  return {
    link() {

      $document.on('keyup', event => {

        if (event.altKey && event.ctrlKey) {

          const goTo = getKeyMap()[event.key];

          if (goTo) {
            goTo();
          }
        }
      });
    },
    restrict: 'E',
    template
  };
}

export default [
  'app',
  app
];
