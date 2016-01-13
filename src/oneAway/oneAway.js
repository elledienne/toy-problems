// Given two strings, write a function to check if they are one edit
// or zero edits away

var oneAway = function (a, b) {
  var diff = 0;

  if (a.length - b.length === -1) {
    var tmp = a;
    a = b;
    b = tmp;
  }

  for (var i = 0, k = 0; (i < a.length && diff <= 1); i++) {
    if (a[i] === b[k]) {
      k++;
    } else {
      diff++;
    }
  }

  return diff <= 1 ? true : false;
};
