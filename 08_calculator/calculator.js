const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let result = 0;
  for(a of array) {
    result += a;
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for(a of array) {
    result *= a;
  }
  return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 1 || n === 0) {
    return 1;
  }
  
  let result = 1;
  while (n > 1) {
    result *= n;
    n--
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
