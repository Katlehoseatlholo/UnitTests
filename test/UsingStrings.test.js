describe('greet', function() {
    it('should return a greeting message with the provided name', function() {
     
      assert.strictEqual(greet('NEO'), 'Hello, NEO');
      // Add more test cases if needed
      assert.equal(greet('Bob'), 'Hello, Bob');
assert.equal(greet('Sam'), 'Hello, Sam');
    });
  });
  