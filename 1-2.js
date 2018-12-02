const fs = require('fs');
const file = './inputs/1.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('\n');

let done = false;
let occurrences = { 0: 1 };
let value = 0;
let index = 0;

do {
  value = value + parseInt(input[index]);
  console.log(index, value);
  if (occurrences.hasOwnProperty(value)) {
    done = true;
  } else if (index === input.length - 1) {
    index = 0;
  } else {
    occurrences[value] = 1;
    index++;
  }
} while (!done);

console.log(value);
