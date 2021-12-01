const fs = require("fs");

const data = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .trimEnd()
  .split("\n")
  .map((n) => +n);

const measurements = data.reduce((accu, _, idx) => {
  const lhsArr = data.slice(idx, idx + 3);
  const rhsArr = data.slice(idx + 1, idx + 4);
  if (rhsArr.length < 3) {
    return accu;
  }

  const sumFn = (p, c) => p + c;

  const lhs = lhsArr.reduce(sumFn, 0);
  const rhs = rhsArr.reduce(sumFn, 0);

  if (rhs > lhs) {
    accu++;
  }

  return accu;
}, 0);

console.log(measurements);
