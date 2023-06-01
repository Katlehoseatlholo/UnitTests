

describe('isWeekday', function() {

  it('should return true for weekdays', function() {
    assert.strictEqual(isWeekday('Saturday'), false);

assert.strictEqual(isWeekday('Monday'), true);
assert.strictEqual(isWeekday('Tuesday'), true);
assert.strictEqual(isWeekday('Wednesday'), true);
assert.strictEqual(isWeekday('Thursday'), true);
assert.strictEqual(isWeekday('Friday'), true);
  });

});
