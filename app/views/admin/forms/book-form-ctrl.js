export default class CreateBookCtrl {

  constructor(BooksSvc) {

    this.book = this.book || {};

    this.BooksSvc = BooksSvc;

    this.defineDatepickerOptions();
    this.resetAuthors();
  }

  addAuthorField() {

    this.book.authors.push({});

  }

  onSubmitButtonClick() {

    const book = {
      accessno: this.book.accessno,
      adddate: this.book.adddate,
      title: this.book.title,
      rackno: this.book.rackno,
      subject: this.book.subject,
      authors: this.book.authors
    };

    this.onSubmit({
      book,
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

  onAddDateFocus() {

    this.datepicker.isOpen = true;
  }

  removeAuthorField(index) {

    this.book.authors.splice(index, 1);

  }

  resetAuthors() {

    this.book.authors = [{}];
  }
}
