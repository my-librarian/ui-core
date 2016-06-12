export default class CreateAuthorCtrl {

  onSubmitButtonClick() {

    this.onSubmit({
      author: this.author,
      onSuccess: () => {

        this.createAuthorForm.$setPristine();
        this.createAuthorForm.$setUntouched();
      }
    });
  }
}

