import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeSaturdays in an alias for timeSaturday.range", () => {
  assert.strictEqual(d3.timeSaturdays, d3.timeSaturday.range);
});

it("timeSaturday.floor(date) returns Saturdays", () => {
  assert.deepStrictEqual(d3.timeSaturday.floor(date.local(2011,  0,  6, 23, 59, 59)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeSaturday.floor(date.local(2011,  0,  7,  0,  0,  0)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeSaturday.floor(date.local(2011,  0,  7,  0,  0,  1)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeSaturday.floor(date.local(2011,  0,  7, 23, 59, 59)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeSaturday.floor(date.local(2011,  0,  8,  0,  0,  0)), date.local(2011,  0,  8));
  assert.deepStrictEqual(d3.timeSaturday.floor(date.local(2011,  0,  8,  0,  0,  1)), date.local(2011,  0,  8));
});

it("timeSaturday.count(start, end) counts Saturdays after start (exclusive) and before end (inclusive)", () => {
  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  assert.strictEqual(d3.timeSaturday.count(date.local(2012,  0,  1), date.local(2012,  0,  6)), 0);
  assert.strictEqual(d3.timeSaturday.count(date.local(2012,  0,  1), date.local(2012,  0,  7)), 1);
  assert.strictEqual(d3.timeSaturday.count(date.local(2012,  0,  1), date.local(2012,  0,  8)), 1);
  assert.strictEqual(d3.timeSaturday.count(date.local(2012,  0,  1), date.local(2012,  0, 14)), 2);

  //     January 2011
  // Su Mo Tu We Th Fr Sa
  //                    1
  //  2  3  4  5  6  7  8
  //  9 10 11 12 13 14 15
  // 16 17 18 19 20 21 22
  // 23 24 25 26 27 28 29
  // 30 31
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011,  0,  7)), 0);
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011,  0,  8)), 1);
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011,  0,  9)), 1);
});

it("timeSaturday.count(start, end) observes daylight saving", () => {
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  1)), 10);
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  3)), 10);
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  4)), 10);
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  0)), 44);
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  1)), 44);
  assert.strictEqual(d3.timeSaturday.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  2)), 44);
});
