const { mutateState, initialState } = require("../part-1");

describe("Dive case", () => {
  const input = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];
  let res = { ...initialState };

  beforeAll(() => {
    input.forEach((command) => {
      res = mutateState(command, res);
    });
  });

  afterAll(() => {
    res = {};
  });

  it("Should has a depth of 10", () => {
    expect(res.depth).toEqual(10);
  });

  it("Should has a horizontal of 15", () => {
    expect(res.horizontal).toEqual(15);
  });

  it("Should has value of 150 if the depth multiply by the horizontal", () => {
    expect(res.depth * res.horizontal).toEqual(150);
  });
});
