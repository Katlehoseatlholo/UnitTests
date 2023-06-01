

describe('isFromGauteng', function() {
  it('should return true for names ending with "GP"', function() {
    assert.equal(isFromGauteng('DR 45 LR GP'), true); 

assert.equal(isFromGauteng('CJ 123 908'), false);

  });

  
});
