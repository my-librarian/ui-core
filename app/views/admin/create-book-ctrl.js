export default class CreateBookCtrl {

  constructor(BooksSvc) {

    this.BooksSvc = BooksSvc;

    this.defineDatepickerOptions();
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

  createBook() {

    const book = {
      accessno: this.accessno,
      adddate: this.adddate,
      title: this.title,
      rackno: this.rackno,
      subject: this.subject
    };

    this.BooksSvc.createBook(book)
      .then(() => {

        this.createBookForm.$setPristine();
        this.createBookForm.$setUntouched();
      });

  }
}
