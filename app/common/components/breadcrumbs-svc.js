import angular from 'angular';

export default class BreadcrumbsSvc {

  constructor() {

    this.history = [];

    this.clear();
  }

  inHistory(toState) {

    return this.history.findIndex(state => angular.equals(state, toState));
  }

  push(state, toState) {

    const index = this.inHistory(toState);

    if (index >= 0) {
      this.history.splice(index);
    } else {
      this.history.push(state);
    }
  }

  clear() {

    while (this.history.length) {

      this.history.pop();
    }
  }
}
