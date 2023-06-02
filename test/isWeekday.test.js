// Import the 'assert' module from Chai
//const assert = chai.assert;

// Test suite
describe('isWeekday', function() {
  // Test case 1: Sunday should return false
  it('should return false for Sunday', function() {
    assert.equal(isWeekday('Sunday'), false);
  });

  // Test case 2: Monday should return true
  it('should return true for Monday', function() {
    assert.equal(isWeekday('Monday'), true);
  });

  // Test case 3: Tuesday should return true
  it('should return true for Tuesday', function() {
    assert.equal(isWeekday('Tuesday'), true);
  });

  // Test case 4: Wednesday should return true
  it('should return true for Wednesday', function() {
    assert.equal(isWeekday('Wednesday'), true);
  });

  // Test case 5: Thursday should return true
  it('should return true for Thursday', function() {
    assert.equal(isWeekday('Thursday'), true);
  });

  // Test case 6: Friday should return false
  it('should return false for Friday', function() {
    assert.equal(isWeekday('Friday'), false);
  });

  // Test case 7: Saturday should return false
  it('should return false for Saturday', function() {
    assert.equal(isWeekday('Saturday'), false);
  });

  // Test case 8: Invalid day should return false
  it('should return false for an invalid day', function() {
    assert.equal(isWeekday('Invalid'), false);
  });
});
