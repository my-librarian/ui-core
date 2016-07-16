export default class InputCtrl {

  hasItem(items, name = '') {

    return items.find(item => item.name.toLowerCase() === name.toLowerCase());
  }

  onChange() {

    this.exists = this.hasItem(this.items, this.model);
  };
}
