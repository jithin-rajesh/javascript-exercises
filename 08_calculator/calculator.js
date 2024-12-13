const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	if (Array.isArray(arr))
  {
    return arr.reduce((sum, current) => sum +current, 0);
  }
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product*current, 1);
};

const power = function(num, pow) {
  let answer = 1;
	for (let i = 0; i < pow; i++)
  {
    answer = answer * num;
  }
  return answer;
};

const factorial = function(num) {
  let fact = 1;
	if (num === 0)
  {
    return 1;
  }
  else {
    for (let i = 1; i <= num; i++)
    {
      fact *= i;
    }
    return fact;
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
