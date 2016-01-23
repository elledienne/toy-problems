// Given two string, s1 and s2, check if s2 is a rotation of s1 using only one
// call
// e.g. 'waterbottle' is a rotation of 'erbottlewat'

String.prototype.isSubstring = function (string) {
  var result = this.search(string);
  return result !== -1 ? true : false;
};

var isRotation = function(s1, s2) {
  var doubledS2 = s2+s2;
  return doubledS2.isSubstring(s1);
}; 
