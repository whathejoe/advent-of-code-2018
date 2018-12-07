const fs = require('fs');
const file = './inputs/5.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('');

const smallCaps = 'abcdefghijklmnopqrstuvwxyz';
const bigCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const opposites = {};

for (let i = 0; i < smallCaps.length; i++) {
  const l = smallCaps[i];
  const L = bigCaps[i];
  opposites[l] = L;
  opposites[L] = l;
}

let i = 0;

do {
  let a = input[i];
  let b = input[i + 1];

  if (opposites[a] === b) {
    input.splice(i, 2);
    if (i > 0) i--;
  } else {
    i++;
  }
} while (i < input.length);

console.log(input.length);
