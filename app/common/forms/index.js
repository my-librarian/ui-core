import angular from 'angular';

import authorForm from './author-form';
import bookForm from './book-form';
import borrowAuthForm from './borrow-auth-form';
import issueForm from './issue-form';
import returnAuthForm from './return-auth-form';
import subjectForm from './subject-form';

import './forms.less';

export default angular
  .module('admin.forms', [])
  .directive(...authorForm)
  .directive(...bookForm)
  .directive(...borrowAuthForm)
  .directive(...issueForm)
  .directive(...returnAuthForm)
  .directive(...subjectForm)
  .name;
