var mathService = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  squareRoot: squareRoot
}

function add (first, second) {
  return first + second
}

function subtract (first, second) {
  return first - second
}

function multiply (first, second) {
  return first * second
}

function divide (first, second) {
  return first / second
}

function squareRoot (num) {
  return Math.sqrt(num)
}
