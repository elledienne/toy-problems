// Replace all the spaces is a string with '%20'

var URLify = function (url) {
  return url.split(' ').join('%20');
};
