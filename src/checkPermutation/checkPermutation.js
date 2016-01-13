// Given two strings decide if one is a permutation of the other

var checkPermutation = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var aSorted = a.split('').sort().join('');
  var bSorted = b.split('').sort().join('');

  return aSorted === bSorted;
};
