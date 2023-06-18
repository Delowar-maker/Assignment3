function sumSquare(numbers) {
  var sumOfSquares = 0;

  // Calculatesum of squares
  for (var i = 0; i < numbers.length; i++) {
    var square = Math.pow(numbers[i], 2);
    sumOfSquares += square;
  }
}
