/*@ngInject*/
export default class ProfileCtrl {

  constructor($stateParams, ProfileSvc) {

    this.ProfileSvc = ProfileSvc;

    this.getUserData($stateParams.id);
  }

  getUserData(id) {

    this.ProfileSvc.getUserData(id)
      .then(user => this.user = user);
  }
}
