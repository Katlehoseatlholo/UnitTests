// Import the 'assert' module from Chai
//const assert = chai.assert;

// Test suite
describe('greet', function() {
  // Test case 1: Valid name should return the greeting message
  it('should return the greeting message with the provided name', function() {
    assert.equal(greet('John'), 'Hello, John');
    assert.equal(greet('Alice'), 'Hello, Alice');
    assert.equal(greet('Bob'), 'Hello, Bob');
  });

  // Test case 2: Empty name should return the greeting message with an empty string
  it('should return the greeting message with an empty string for empty name', function() {
    assert.equal(greet(''), 'Hello, ');
  });
});
