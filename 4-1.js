const fs = require('fs');
const file = './inputs/4.txt';

let input = fs.readFileSync(file, 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

input = input.split('\n');

input.sort();

let targetGuard = null;
let targetGuardSleepCount = 0;

const guards = {};
let currentId = null;
let start = null;

input.forEach(log => {
  let [time, activity] = log.match(/\[.+\]|(\d+|sleep|wake)/g);

  if (activity.match(/\d+/g)) {
    currentId = activity;
    if (!guards[currentId]) {
      guards[currentId] = {};
    }
  } else if (activity === 'sleep') {
    let [, , , , sleep] = time.match(/\d+/g);
    start = parseInt(sleep);
  } else if (activity === 'wake') {
    let [, , , , end] = time.match(/\d+/g);
    end = parseInt(end);

    let current = guards[currentId];
    let difference = end - start;
    if (current.hasOwnProperty('total')) {
      current.total = current.total + difference;
    } else {
      current.total = difference;
    }

    if (current.total > targetGuardSleepCount) {
      targetGuard = currentId;
      targetGuardSleepCount = current.total;
    }

    for (let second = start; second < end; second++) {
      if (current.hasOwnProperty(second)) {
        current[second]++;
      } else {
        current[second] = 1;
      }
    }
  }
});

let targetTime = null;
let targetTimeCount = 0;
const stats = guards[targetGuard];

Object.entries(stats).forEach(([key, value]) => {
  const k = parseInt(key);
  const v = parseInt(value);
  if (v > targetTimeCount && !Number.isNaN(k)) {
    targetTime = k;
    targetTimeCount = v;
  }
});

console.log(targetGuard * targetTime);
