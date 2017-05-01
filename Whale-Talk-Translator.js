var prompt = require('prompt-sync')();

var input = prompt("Enter a phrase to translate into whale talk.: ").toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (var i = 0; i < input.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === 'e') {
  	resultArray.push(input[i]);
  } else if (input[i] === 'u') {
  	resultArray.push(input[i]);
  } else if (input[i] === ' ') {
  	resultArray.push(input[i]);
  }
}

resultArray = resultArray.join('').toUpperCase();
console.log(resultArray);