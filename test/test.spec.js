describe("Test for: isUnique", function () {
   
  // beforeEach(function() {
  // });

  // afterEach(function() {
  // });

  it('Should return true. "abcdefghilmnopqrstuvz" is unique', function () {
    var result = isUnique('abcdefghilmnopqrstuvz');

    expect(result).to.be.true;
  });
  
});

describe("Test for: oneWay", function () {

  xit('Should return false for strings which length difference is grater than 2', function () {
    expect(oneAway('pale', 'palese')).to.be.false;
  });

  it('Should return true when the second string has one char removed', function () {
    expect(oneAway('pale', 'ple')).to.be.true;
  });

  it('Should return false when the second string has two char changed', function () {
    expect(oneAway('pale', 'pge')).to.be.false;
  });

  it('Should return true when the first string has one more char', function () {
    expect(oneAway('pales', 'pale')).to.be.true;
  });

  it('Should return true when the second string has one different char', function () {
    expect(oneAway('pales', 'pale')).to.be.true;
  });

  it('Should return false when the second string has two different char', function () {
    expect(oneAway('pale', 'bake')).to.be.false;
  });

  it('Should return true for strings that are equal', function () {
    expect(oneAway('lorenzo', 'lorenzo')).to.be.true;
  })

});
