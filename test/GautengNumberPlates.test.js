

describe('isFromGauteng', function() {
  it('should return true for names ending with "GP"', function() {
    assert.strictEqual(isFromGauteng('DR 45 LR GP'), true); 

assert.strictEqual(isFromGauteng('CJ 123 908'), false);

  });

  
});
