export default class CreateBookCtrl {

  constructor() {

    this.book = this.book || {};

    this.defineDatepickerOptions();
    this.resetForm();
  }

  addAuthorField() {

    this.book.authors.push({});

  }

  addSubjectField() {

    this.book.subjects.push({});

  }

  onSubmitButtonClick() {

    this.onSubmit({
      book: this.book,
      onSuccess: () => {

        this.createBookForm.$setPristine();
        this.createBookForm.$setUntouched();
      }
    });

  }

  defineDatepickerOptions() {

    this.datepicker = {
      format: 'dd-MMM-yyyy',
      isOpen: false,
      options: {
        maxDate: new Date(),
        showWeeks: false
      }
    };
  }

  onAcqDateFocus() {

    this.datepicker.isOpen = true;
  }

  removeAuthorField(index) {

    this.book.authors.splice(index, 1);

  }

  removeSubjectField(index) {

    this.book.subjects.splice(index, 1);

  }

  resetForm() {

    this.book.condition = 'GOOD';
    this.book.source = 'CL';
    this.book.binding = 'PAPER';
    this.book.original = true;
    this.book.authors = [{}];
    this.book.subjects = [{}];
  }
}
