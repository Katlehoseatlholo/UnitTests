// Import the 'assert' module from Chai
//const assert = chai.assert;

// Test suite
describe('isDayName', function() {
  // Test case 1: Valid day name should return true
  it('should return true for valid day names', function() {
    assert.isTrue(isDayName('Monday'));
    assert.isTrue(isDayName('Tuesday'));
    assert.isTrue(isDayName('Wednesday'));
    assert.isTrue(isDayName('Thursday'));
    assert.isTrue(isDayName('Friday'));
    assert.isTrue(isDayName('Saturday'));
    assert.isTrue(isDayName('Sunday'));
  });

  // Test case 2: Invalid day name should return false
  it('should return false for invalid day names', function() {
    assert.isFalse(isDayName('Invalid'));
    assert.isFalse(isDayName('Mon'));
    assert.isFalse(isDayName('Tues'));
    assert.isFalse(isDayName('Wed'));
    assert.isFalse(isDayName('Thurs'));
    assert.isFalse(isDayName('Fri'));
    assert.isFalse(isDayName('Sat'));
    assert.isFalse(isDayName('Sun'));
  });
});
