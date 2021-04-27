import assert from "assert";
import * as d3 from "../src/index.js";

it("utcMillisecond is an alias for timeMillisecond", () => {
  assert.strictEqual(d3.utcMillisecond, d3.timeMillisecond);
});
