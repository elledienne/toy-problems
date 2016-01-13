// Check if a string is a permutation of a palindrome. Doesn't need to be
// limited to just dictionary words.

var palindromePermutation = function (string) {
  var singleLetter = 0;

  var letterCount = string.split('').reduce(function (obj, letter) {
    if (letter === ' ') {
      return obj; // skipping it
    }

    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
    return obj;
  }, {});

  for (var letter in letterCount) {
    if (letterCount[letter] % 2 !== 0) {
      if (singleLetter === 0) {
        singleLetter++;
      } else {
        return false;
      }
    }
  }
  return true;
};
