const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf-8" }).trimEnd().split("\n");

const measurements = data.reduce((accu, cur, idx) => {
  if (idx === 0) return accu;

  const prevValue = +data[idx - 1];
  if (+cur > prevValue) {
    accu++;
  }

  return accu;
}, 0);

console.log(measurements);
