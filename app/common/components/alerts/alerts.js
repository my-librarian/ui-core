import template from './alerts.html';

import './alerts.less';

function alerts(AlertsSvc) {

  function link($scope) {

    $scope.alerts = AlertsSvc.alerts;

    $scope.removeAlert = index => $scope.alerts.splice(index, 1);

  }

  return {
    restrict: 'E',
    link,
    template
  };
}

export default [
  'alerts',
  alerts
];
