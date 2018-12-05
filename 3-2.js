const fs = require('fs');
const file = './inputs/3.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('\n');

let occurrences = {};
const ids = [];

input.forEach(entry => {
  let [id, x, y, width, height] = entry.match(/\d+/g);
  x = parseInt(x);
  y = parseInt(y);
  width = parseInt(width);
  height = parseInt(height);
  ids.push(id);

  const coords = [];

  for (let i = x + 1; i <= x + width; i++) {
    for (let j = y + 1; j <= y + height; j++) {
      coords.push(`${i},${j}`);
    }
  }

  coords.forEach(coord => {
    if (!occurrences[coord]) {
      occurrences[coord] = [id];
    } else {
      occurrences[coord].push(id);
    }
  });
});

Object.values(occurrences).forEach(array => {
  if (array.length > 1) {
    array.forEach(id => {
      const index = ids.indexOf(id);
      if (index > -1) {
        ids.splice(index, 1);
      }
    });
  }
});

console.log(ids);
