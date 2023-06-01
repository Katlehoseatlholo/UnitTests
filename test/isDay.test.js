describe('isDayName', function() {
  it('should return true for valid day names', function() {
    assert.equal(isDayName('Saturday'), true);
assert.equal(isDayName('Monday'), true);
assert.equal(isDayName('January'), false, 'January is not a day');

  });

  
});
