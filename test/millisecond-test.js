import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeMillisecond.every(step) returns every stepth millisecond, starting with the first millisecond of the second", () => {
  assert.deepStrictEqual(d3.timeMillisecond.every(50).range(date.local(2008, 11, 30, 12, 36, 0, 947), date.local(2008, 11, 30, 12, 36, 1, 157)), [date.local(2008, 11, 30, 12, 36, 0, 950), date.local(2008, 11, 30, 12, 36, 1, 0), date.local(2008, 11, 30, 12, 36, 1, 50), date.local(2008, 11, 30, 12, 36, 1, 100), date.local(2008, 11, 30, 12, 36, 1, 150)]);
  assert.deepStrictEqual(d3.timeMillisecond.every(100).range(date.local(2008, 11, 30, 12, 36, 0, 947), date.local(2008, 11, 30, 12, 36, 1, 157)), [date.local(2008, 11, 30, 12, 36, 1, 0), date.local(2008, 11, 30, 12, 36, 1, 100)]);
  assert.deepStrictEqual(d3.timeMillisecond.every(50).range(date.utc(2008, 11, 30, 12, 36, 0, 947), date.utc(2008, 11, 30, 12, 36, 1, 157)), [date.utc(2008, 11, 30, 12, 36, 0, 950), date.utc(2008, 11, 30, 12, 36, 1, 0), date.utc(2008, 11, 30, 12, 36, 1, 50), date.utc(2008, 11, 30, 12, 36, 1, 100), date.utc(2008, 11, 30, 12, 36, 1, 150)]);
  assert.deepStrictEqual(d3.timeMillisecond.every(100).range(date.utc(2008, 11, 30, 12, 36, 0, 947), date.utc(2008, 11, 30, 12, 36, 1, 157)), [date.utc(2008, 11, 30, 12, 36, 1, 0), date.utc(2008, 11, 30, 12, 36, 1, 100)]);
});
