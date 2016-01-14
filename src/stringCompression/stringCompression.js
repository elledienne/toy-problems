// Implement a method to perform basic string compression using the counts of repeated chars.
// For example 'aabcccccaaa' become 'a2b1c5a3'
// If the compressed string would not become smaller than the original return the original

var stringCompression = function (string) {
  var chars = string.split('');

  var compressed = [];
  chars.reduce(function (prev, next) {
    if (prev !== next) {
      compressed.push(next, 1);
    } else {
      compressed[compressed.length - 1]++;
    }
    return next;
  }, null);

  compressed = compressed.join('');
  return compressed.length < string.length ? compressed : string;
};
