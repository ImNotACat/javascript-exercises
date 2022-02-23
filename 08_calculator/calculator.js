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
  for (let i = 0; i < numbers.length; i++) {
    if (i = 0) {
      result = numbers[i];
    }
    else {
      result = result * numbers[i];
    }
  }
  return result;
};

const power = function() {
	
};

const factorial = function() {
	
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
