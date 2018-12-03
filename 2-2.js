const fs = require('fs');
const file = './inputs/2.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('\n');
input = input.sort();

let solution = null;
let i = 0;
let l = 0;
let string = '';
let comparator = '';
let differences = [];

do {
  string = input[i];
  comparator = input[i + 1];
  differences = [];
  l = 0;

  do {
    if (string[l] !== comparator[l]) {
      differences.push(l);
    }
    l++;
  } while (l < string.length || differences.length < 1);

  if (differences.length === 1) {
    const diff = differences[0];
    solution = string.substr(0, diff) + string.substr(diff + 1);
  } else {
    i++;
  }
} while (!solution);

console.log(solution);
