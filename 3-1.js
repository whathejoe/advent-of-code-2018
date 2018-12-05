const fs = require('fs');
const file = './inputs/3.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('\n');

let overlaps = 0;
let occurrences = {};

input.forEach(entry => {
  let [, x, y, width, height] = entry.match(/\d+/g);
  x = parseInt(x);
  y = parseInt(y);
  width = parseInt(width);
  height = parseInt(height);

  const coords = [];

  for (let i = x + 1; i <= x + width; i++) {
    for (let j = y + 1; j <= y + height; j++) {
      coords.push(`${i},${j}`);
    }
  }

  coords.forEach(coord => {
    if (occurrences[coord] && occurrences[coord] === 1) {
      occurrences[coord]++;
      overlaps++;
    } else if (!occurrences[coord]) {
      occurrences[coord] = 1;
    }
  });
});

console.log(overlaps);
