/*@ngInject*/
export default class HomeCtrl {

  constructor($state) {

    this.$state = $state;
  }

  forwardToBooksList() {

    this.$state.go('books.list', {q: this.query});
  }
}
