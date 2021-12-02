const { realInput } = require("./index");

/** Type signature / template */
const initialState = {
  depth: 0,
  horizontal: 0,
  aim: 0,
};

/**
 * @param {string} input
 * @param {{ horizontal: number, depth: number, aim: number }} state
 */
function mutateState(input, state) {
  /**
   * @type {["forward" | "down" | "up", string]} command
   */
  const [command, value] = input.split(" ");
  const valueNumber = +value;

  let mutState = {
    ...state,
  };

  switch (command) {
    case "forward":
      mutState.horizontal += valueNumber;
      mutState.depth += mutState.aim * valueNumber;
      break;

    case "down":
      mutState.aim += valueNumber;
      break;

    case "up":
      mutState.aim -= valueNumber;
      break;
  }

  return mutState;
}

module.exports = {
  mutateState,
  initialState,
};

(() => {
  let res = { ...initialState };
  realInput.forEach((inputCommand) => {
    res = mutateState(inputCommand, res);
  });

  console.log(res.depth * res.horizontal);
})();
