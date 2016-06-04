import template from './checkbox-list.html';

import './checkbox-list.less';

const checkboxList = {
  restrict: 'E',
  template,
  scope: {
    items: '=',
    onChange: '&',
    title: '@'
  }
};

export default [
  'checkboxList',
  () => checkboxList
];
