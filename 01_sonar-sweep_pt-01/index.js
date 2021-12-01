const fs = require("fs");

const data = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .trimEnd()
  .split("\n")
  .map((n) => +n);

const measurements = data.reduce((accu, cur, idx) => {
  if (idx === 0) return accu;
  if (cur > data[idx - 1]) accu++;

  return accu;
}, 0);

console.log(measurements);
