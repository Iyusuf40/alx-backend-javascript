export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  set name(val) {
    this._name = val;
  }

  set code(val) {
    this._code = val;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}
