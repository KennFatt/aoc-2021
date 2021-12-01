const fs = require("fs");

const data = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .trimEnd()
  .split("\n")
  .map((n) => +n);

const measurements = data
  .filter((_, idx) => idx < data.length - 2)
  .reduce((accu, _, idx) => {
    const arr = [data.slice(idx, idx + 3), data.slice(idx + 1, idx + 4)];

    const sumFn = (p, c) => p + c;
    const sum = arr.map((v) => v.reduce(sumFn, 0));

    if (sum[1] > sum[0]) accu++;

    return accu;
  }, 0);

console.log(measurements);
