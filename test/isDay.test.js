describe('isDayName', function() {
  it('should return true for valid day names', function() {
    assert.strictEqual(isDayName('Saturday'), true);
assert.strictEqual(isDayName('Monday'), true);
assert.strictEqual(isDayName('January'), false, 'January is not a day');

  });

  
});
