const fs = require('fs');
const file = './inputs/2.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('\n');

let double = 0;
let triple = 0;

input.forEach(id => {
  const letters = id.split('');
  const occurrences = {};

  letters.forEach(l => {
    if (occurrences.hasOwnProperty(l)) {
      occurrences[l]++;
    } else {
      occurrences[l] = 1;
    }
  });

  let counts = Object.values(occurrences);
  if (counts.indexOf(2) > -1) {
    double++;
  }
  if (counts.indexOf(3) > -1) {
    triple++;
  }
});

const final = double * triple;
console.log(final);
