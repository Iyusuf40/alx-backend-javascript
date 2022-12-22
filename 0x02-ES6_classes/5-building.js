export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.evacuationWarningMessage() === -1
      && this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }

  evacuationWarningMessage() {
    if (this._sqft < 0) {
      return -1;
    }
    return -1;
  }
}
