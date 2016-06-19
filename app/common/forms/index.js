import angular from 'angular';

import authorForm from './author-form';
import bookForm from './book-form';
import subjectForm from './subject-form';

import './forms.less';

export default angular
  .module('admin.forms', [])
  .directive(...authorForm)
  .directive(...bookForm)
  .directive(...subjectForm)
  .name;
