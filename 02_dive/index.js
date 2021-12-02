const fs = require("fs");

const realInput = fs.readFileSync("./input.txt", { encoding: "utf-8" }).trimEnd().split("\n");

module.exports = {
  realInput,
};
