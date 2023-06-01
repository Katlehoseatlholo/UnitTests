const assert = require('assert');

describe('isFromGauteng', function() {
  it('should return true for names ending with "GP"', function() {
    assert.strictEqual(isFromGauteng('JohnDoeGP'), true);
    assert.strictEqual(isFromGauteng('JaneSmithGP'), true);
    assert.strictEqual(isFromGauteng('BobJohnsonGP'), true);
  });

  it('should return false for names not ending with "GP"', function() {
    assert.strictEqual(isFromGauteng('AliceGauteng'), false);
    assert.strictEqual(isFromGauteng('RobertGP'), false);
    assert.strictEqual(isFromGauteng('MarkGPGP'), false);
  });

  it('should return false for empty names', function() {
    assert.strictEqual(isFromGauteng(''), false);
  });
});
