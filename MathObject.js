function sumSquare(numbers) {
  var sumOfSquares = 0;

  // Calculatesum of squares
  for (var i = 0; i < numbers.length; i++) {
    var square = Math.pow(numbers[i], 2);
    sumOfSquares += square;
  }
  var squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}

var inputNumbers = [5, 6, 7];
var result = sumSquare(inputNumbers);
console.log(result);
