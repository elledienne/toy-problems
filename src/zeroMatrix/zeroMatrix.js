// Write an algorithm such that if an element in an MxN matrix is 0, its
// entire row an column are set to 0

var zeroMatrix = function (matrix) {

  var zeroCoords = matrix.reduce(function (coordsRow, nextRow, indexRow) {
    return nextRow.reduce(function (coords, next, index) {
      if (next === 0) {
        coords.push([indexRow, index]);
      }
      return coords;
    }, coordsRow);
  }, []);

  for (var i = 0; i < zeroCoords.length; i++) {
    var row = zeroCoords[i][0];
    var col = zeroCoords[i][1];

    for (var iterator = 0; iterator < matrix.length; iterator++) {
      if (iterator === row) {
        var zeroes = matrix[iterator].map(function () { return 0;});
        matrix[iterator] = zeroes;
      } else {
        matrix[iterator][col] = 0;
      }
    }
  }

  return matrix;
};
