// Determine if a string has all unique characters

var isUnique = function (string) {
  return string.split('').sort().every(function (val, index, arr) {
    return index > 0 ? val !== arr[index-1] : true;
  })
}