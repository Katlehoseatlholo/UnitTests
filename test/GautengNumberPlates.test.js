// Import the 'assert' module from Chai
//const assert = chai.assert;

// Test suite
describe('isFromGauteng', function() {
  // Test case 1: Name ending with "GP" should return true
  it('should return true for names ending with "GP"', function() {
    assert.isTrue(isFromGauteng('ABC GP'));
    assert.isTrue(isFromGauteng('XYZ GP'));
    assert.isTrue(isFromGauteng('PQR GP'));
  });

  // Test case 2: Name not ending with "GP" should return false
  it('should return false for names not ending with "GP"', function() {
    assert.isFalse(isFromGauteng('DEF WC'));
    assert.isFalse(isFromGauteng('LMN KZN'));
    assert.isFalse(isFromGauteng('JKL EC'));
  });

  // Test case 3: Empty string should return false
  it('should return false for an empty string', function() {
    assert.isFalse(isFromGauteng(''));
  });
});
