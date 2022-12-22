import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  };

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  };

  set amount(val) {
    this._amount = val;
  };

  set currency(val) {
    this._currency = val;
  };

  get amount() {
    return this._amount;
  };

  get currency() {
    return this._currency;
  };

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  };
}
