import controller from './create-author-ctrl';
import template from './create-author.html';

const createAuthor = {
  controller,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default [
  'createAuthor',
  () => createAuthor
];
