import { expect } from "chai";

import add from "./server";

describe("calculate", function () {
  it("add", function () {
    const result: number = add(5, 2);
    expect(result).equal(7);
  });
});
