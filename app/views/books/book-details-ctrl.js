export default class BookDetailsCtrl {

  constructor($state, BooksSvc) {

    this.$state = $state;
    this.BooksSvc = BooksSvc;

    this.getBook();
  }

  static getCondition(condition) {

    return {
      good: 'Good',
      damaged: 'Damaged',
      tbr: 'To be replaced'
    }[condition.toLowerCase()];

  }

  static getBinding(cover) {

    return {
      paper: 'Paper Binding',
      hard: 'Hard Binding'
    }[cover.toLowerCase()];

  }

  static getSource(source) {

    return {
      cl: 'Central Library',
      dc: 'Donated',
      cc: 'Complemented',
      ot: 'Other'
    }[source.toLowerCase()];

  }

  getSubjectLink(id) {

    return this.$state.href('subjects.details', {id});
  }

  getBook() {

    this.BooksSvc.getBook(this.$state.params.id)
      .then(details => {

        details.binding = BookDetailsCtrl.getBinding(details.binding);
        details.condition = BookDetailsCtrl.getCondition(details.condition);
        details.source = BookDetailsCtrl.getSource(details.source);

        details.description = details.description.replace('{br}', '\n');

        this.details = details;

      });
  }

  deleteBook() {

    this.BooksSvc.deleteBook(this.details.bookid)
      .then(() => this.$state.go('books.list'));
  }
}
