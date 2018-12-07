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
let shortestOutput = 100000;

for (let n = 0; n < smallCaps.length; n++) {
  const l = smallCaps[n];
  const L = bigCaps[n];
  opposites[l] = L;
  opposites[L] = l;
}

const triggerReactions = string => {
  let i = 0;
  do {
    let a = string[i];
    let b = string[i + 1];

    if (opposites[a] === b) {
      string.splice(i, 2);
      if (i > 0) i--;
    } else {
      i++;
    }
  } while (i < string.length);

  return string;
};

for (let n = 0; n < smallCaps.length; n++) {
  const l = smallCaps[n];
  const L = bigCaps[n];

  const regex = new RegExp(`[${l}${L}]`, 'g');
  const strippedInput = input.filter(letter => !letter.match(regex));

  const output = triggerReactions(strippedInput);

  if (output.length < shortestOutput) {
    shortestOutput = output.length;
  }
}

console.log(shortestOutput);
