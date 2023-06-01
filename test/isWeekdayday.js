const assert = require('assert');

describe('isWeekday', function() {
  const myArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  it('should return true for weekdays', function() {
    assert.strictEqual(isWeekday('Monday'), true);
    assert.strictEqual(isWeekday('Tuesday'), true);
    assert.strictEqual(isWeekday('Wednesday'), true);
    assert.strictEqual(isWeekday('Thursday'), true);
    assert.strictEqual(isWeekday('Friday'), true);
  });

  it('should return false for weekends', function() {
    assert.strictEqual(isWeekday('Saturday'), false);
    assert.strictEqual(isWeekday('Sunday'), false);
  });

  it('should return false for invalid day names', function() {
    assert.strictEqual(isWeekday('Janine'), false);
    assert.strictEqual(isWeekday('Day'), false);
    assert.strictEqual(isWeekday('Week'), false);
    assert.strictEqual(isWeekday('Month'), false);
    assert.strictEqual(isWeekday('Year'), false);
  });
});
