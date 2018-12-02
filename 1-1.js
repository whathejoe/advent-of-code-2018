const fs = require('fs');
const file = './inputs/1.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('\n');

const final = input.reduce((sum, value) => sum + parseInt(value), 0);
console.log(final);
