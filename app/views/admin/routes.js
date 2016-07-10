const admin = {
  parent: 'app',
  name: 'admin',
  url: '/admin',
  template: '<admin></admin>'
};

const adminCreateAuthor = {
  name: 'admin.createAuthor',
  url: '/createAuthor',
  template: '<create-author></create-author>'
};

const adminCreateBook = {
  name: 'admin.createBook',
  url: '/createBook',
  template: '<create-book></create-book>'
};

const adminCreateSubject = {
  name: 'admin.createSubject',
  url: '/createSubject',
  template: '<create-subject></create-subject>'
};

const adminReturnBooks = {
  name: 'admin.returnBooks',
  url: '/returnBooks',
  template: '<return-books></return-books>'
};

/*@ngInject*/
export default function routes($stateProvider) {

  $stateProvider
    .state(admin)
    .state(adminCreateAuthor)
    .state(adminCreateBook)
    .state(adminCreateSubject)
    .state(adminReturnBooks);
}
