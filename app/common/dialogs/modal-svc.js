import controller from './modal-ctrl';
import borrowModalTemplate from './borrow-modal.html';
import issueModalTemplate from './issue-modal.html';
import returnModalTemplate from './return-modal.html';

/*@ngInject*/
export default class ModalSvc {

  constructor($uibModal) {

    this.$uibModal = $uibModal;
  }

  openModal(modalData, template) {

    return this.$uibModal
      .open({
        controller,
        controllerAs: 'vm',
        template,
        resolve: {
          modalData
        }
      })
      .result;
  }
  
  openBorrowModal(title) {

    return this.openModal({title}, borrowModalTemplate);
  }

  openIssueModal(title) {

    return this.openModal({title}, issueModalTemplate);
  }

  openReturnModal(title) {

    return this.openModal({title}, returnModalTemplate);
  }
}
