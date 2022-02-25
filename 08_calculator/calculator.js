const add = function(a, b) {
  if (typeof a === "undefined"){
    a = 0;
  }
  if (typeof b === "undefined"){
    b = 0;
  }  
	return (a + b);
};

const subtract = function(a, b) {
  if (typeof b === "undefined"){
    b = 0;
  } 
  if (typeof a === "undefined"){
    a = 0;
  } 
  return (a - b); 
	
};

const sum = function(numbers) {
	if (numbers === "undefined"){
    return 0;
  }
  else {
    result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result = result + numbers[i];
    }
    return result;
  }
};

const multiply = function(numbers) {
  let result = numbers.reduce (
    (previous, current) => previous * current
  );
  return result;
};

const power = function(a, b) {
	let result = Math.pow(a, b);
  return result;
};

const factorial = function(num) {
  let result = 1;
  if (num === 0) {
    return result;}
  else {
    for (let i = num; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
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
