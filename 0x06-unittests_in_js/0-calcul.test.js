const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 5', function () {
    assert.equal(calculateNumber(1, 4), 5);
  });
});
