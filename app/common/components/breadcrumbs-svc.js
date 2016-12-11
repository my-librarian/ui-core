export default class BreadcrumbsSvc {

  constructor() {

    this.history = [];

    this.clear();
  }

  inHistory(toState) {

    return this.history.findIndex(state =>
      state.from.name === toState.from.name &&
      state.params.id === toState.params.id
    );
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

    this.history.splice(0);
  }
}
