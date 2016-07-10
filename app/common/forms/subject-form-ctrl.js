export default class CreateSubjectCtrl {

  onSubmitButtonClick() {

    this.onSubmit({
      subject: this.subject,
      onSuccess: () => {

        this.createSubjectForm.$setPristine();
        this.createSubjectForm.$setUntouched();
      }
    });
  }
}
