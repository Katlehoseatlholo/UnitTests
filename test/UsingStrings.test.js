describe('greet', function() {
    it('should return a greeting message with the provided name', function() {
     
      assert.strictEqual(greet('NEO'), 'Hello, NEO');
      // Add more test cases if needed
      assert.strictEqual(greet('Bob'), 'Hello, Bob');
assert.strictEqual(greet('Sam'), 'Hello, Sam');
    });
  });
  