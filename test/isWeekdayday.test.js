

describe('isWeekday', function() {
 // const myArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  it('should return true for weekdays', function() {
    assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);
  });

});
