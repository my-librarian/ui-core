export default class DogCtrl {

  constructor() {

    this.setDogAge();
  }

  setDogAge() {

    const lifeSpan = 20;

    this.dogAge = Math.floor(Math.random() * lifeSpan);
  }
}
