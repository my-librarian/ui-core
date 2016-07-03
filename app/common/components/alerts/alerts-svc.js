export default class AlertsSvc {

  constructor() {

    this.alerts = [];
  }

  addAlert(message, type = 'info') {

    this.alerts.unshift({
      message,
      type
    });
  }
}
