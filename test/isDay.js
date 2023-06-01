const assert = require('assert');

describe('isDayName', function() {
  it('should return true for valid day names', function() {
    assert.strictEqual(isDayName('Monday'), true);
    assert.strictEqual(isDayName('Tuesday'), true);
    assert.strictEqual(isDayName('Wednesday'), true);
    assert.strictEqual(isDayName('Thursday'), true);
    assert.strictEqual(isDayName('Friday'), true);
    assert.strictEqual(isDayName('Saturday'), true);
    assert.strictEqual(isDayName('Sunday'), true);
  });

  it('should return false for invalid day names', function() {
    assert.strictEqual(isDayName('Janine'), false);
    assert.strictEqual(isDayName('Day'), false);
    assert.strictEqual(isDayName('Week'), false);
    assert.strictEqual(isDayName('Month'), false);
    assert.strictEqual(isDayName('Year'), false);
  });
});
