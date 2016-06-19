export default class CreateSubjectCtrl {

  onAddButtonClick() {

    this.onAdd({
      subject: this.subject,
      onSuccess: () => {

        this.createSubjectForm.$setPristine();
        this.createSubjectForm.$setUntouched();
      }
    });
  }
}
