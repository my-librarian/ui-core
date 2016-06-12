export default class CreateBookCtrl {

  constructor(BooksSvc) {

    this.BooksSvc = BooksSvc;

    this.defineDatepickerOptions();
    this.resetAuthors();
  }

  addAuthorField() {

    this.authors.push({});

  }

  onSubmitButtonClick() {

    const book = {
      accessno: this.accessno,
      adddate: this.adddate,
      title: this.title,
      rackno: this.rackno,
      subject: this.subject,
      authors: this.authors
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

    this.authors.splice(index, 1);

  }

  resetAuthors() {

    this.authors = [{}];
  }
}
