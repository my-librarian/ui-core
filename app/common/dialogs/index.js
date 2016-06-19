import angular from 'angular';

import ModalSvc from './modal-svc';

import './modal.less';

export default angular.module('common.dialogs', [])
  .service('ModalSvc', ModalSvc)
  .name;
