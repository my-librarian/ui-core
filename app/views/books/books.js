const books = {
  restrict: 'E',
  template: '<ui-view />'
};

export default [
  'books',
  () => books
];