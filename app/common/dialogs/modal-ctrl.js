export default class BorrowModalCtrl {

  constructor($uibModalInstance, modalData) {

    this.$uibModalInstance = $uibModalInstance;
    this.modalData = modalData;
  }

  dismissModal(...args) {

    this.$uibModalInstance.dismiss(args);
  }

  closeModal(...args) {

    this.$uibModalInstance.close(args);
  }
}
