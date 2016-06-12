import angular from 'angular';

import admin from './admin';
import createAuthor from './create-author';
import createBook from './create-book';
import createSubject from './create-subject';
import forms from './forms';
import helpers from './helpers';
import routes from './routes';

export default angular
  .module('admin', [
    forms,
    helpers
  ])
  .config(routes)
  .directive(...admin)
  .directive(...createAuthor)
  .directive(...createBook)
  .directive(...createSubject)
  .name;
