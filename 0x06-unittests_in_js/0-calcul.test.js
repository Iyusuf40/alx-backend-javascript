const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  for(let i = 0; i < 140; i++){
    it(`should return ${i * 2}`, function () {
      assert.equal(calculateNumber(i, i), i * 2);
    });
  }
});
