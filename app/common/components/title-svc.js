export default class TitleSvc {

  constructor() {

    this.page = {
      title: 'My Librarian'
    };
  }

  setTitle(title) {

    this.page.title = ['My Librarian', title].join(' | ');
  }
}
