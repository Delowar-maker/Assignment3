function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkIfPrime() {
  var numberInput = document.getElementById("numberInput").value;
  var number = parseInt(numberInput);

  var resultElement = document.getElementById("result");
  if (isPrime(number)) {
    resultElement.textContent = number + " prime number.";
  } else {
    resultElement.textContent = number + " not a prime number.";
  }
}
