describe("Test for: isUnique", function() {
   
  // beforeEach(function() {
  // });

  // afterEach(function() {
  // });

  it('Should return true. "abcdefghilmnopqrstuvz" is unique' , function() {
    var result = isUnique('abcdefghilmnopqrstuvz');

    expect(result).to.be.true;
  });
  
});
