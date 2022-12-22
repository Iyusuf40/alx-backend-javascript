import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar(...rest) {
    if (this.x) {
      return new Car(...rest);
    }
    return new Car(...rest);
  }
}
