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

describe('Test for: oneWay', function () {

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
  });

});

describe('Test for: stringCompression', function () {

  it('Should return a string that is shorter than the original', function () {
    var string1 = 'aabcccccaaa';
    var compressed1 = stringCompression(string1);

    expect(compressed1.length < string1.length).to.be.true;
  });

  it('Should return the original string if the compressed one is not shorter', function () {
    var string2 = 'aabbccddee';
    var compressed2 = stringCompression(string2);

    var string3 = 'abcdefghil';
    var compressed3 = stringCompression(string3);

    expect(compressed2 === string2 && compressed3 === string3).to.be.true;
  });

  it('Should work with lowercase and uppercase letters', function () {
    expect(stringCompression('aaaAAbBBBBzzzzzzZ')).to.be.equal('a3A2b1B4z6Z1')
  })
});

describe('Test for: zeroMatrix', function () {

  it('Should return the same matrix if no 0 are found', function () {
    var myMatrix = [
      [1, 3, 5, 4],
      [3, 8, 6, 9],
      [2, 8, 5, 8]
    ];
    expect(myMatrix).to.eql(zeroMatrix(myMatrix));
  });

  it('Should return a different matrix if 0 are found', function () {
    var myMatrix = [
      [1, 3, 5, 4],
      [3, 0, 6, 9],
      [2, 8, 5, 8]
    ];
    var copyMatrix = myMatrix.map(function (itm) { return itm; });

    expect(copyMatrix).to.not.eql(zeroMatrix(myMatrix));
  });

  it('Should have 10 zeroes starting with 2', function () {
    var myMatrix = [
      [1, 3, 5, 4],
      [3, 0, 6, 9],
      [2, 8, 5, 0]
    ];
    
    zeroMatrix(myMatrix);

    var zeroCount = myMatrix.reduce(function (count, nextRow) {
      return nextRow.reduce(function (c, next) {
        if (next === 0) {
          c++;
        }
        return c;
      }, count);
    }, 0);

    expect(zeroCount).to.equal(10);
  });
});


























