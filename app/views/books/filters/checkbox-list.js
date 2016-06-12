import template from './checkbox-list.html';

import './checkbox-list.less';

function link($scope) {

  $scope.clearAll = () => {

    $scope.items.forEach(item => item.selected = false);

    $scope.onChange();
  };
}

const checkboxList = {
  link,
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
