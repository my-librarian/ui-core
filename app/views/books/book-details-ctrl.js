export default class BookDetailsCtrl {

  constructor($state, BooksSvc) {

    this.$state = $state;

    BooksSvc.getBook($state.params.id)
      .then(details => this.details = details);
  }

  getSubjectLink(id) {

    return this.$state.href('subjects.details', {id});
  }
}
