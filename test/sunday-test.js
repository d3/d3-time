import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeSundays in an alias for timeSunday.range", () => {
  assert.strictEqual(d3.timeSundays, d3.timeSunday.range);
});

it("timeSunday.floor(date) returns Sundays", () => {
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2010, 11, 31, 23, 59, 59)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2011,  0,  1,  0,  0,  0)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2011,  0,  1,  0,  0,  1)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2011,  0,  1, 23, 59, 59)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2011,  0,  2,  0,  0,  0)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2011,  0,  2,  0,  0,  1)), date.local(2011,  0,  2));
});

it("timeSunday.floor(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2011,  2, 13,  1)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(2011, 10,  6,  1)), date.local(2011, 10,  6));
});

it("timeSunday.floor(date) handles years in the first century", () => {
  assert.deepStrictEqual(d3.timeSunday.floor(date.local(9, 10,  6,  7)), date.local(9, 10,  1));
});

it("timeSunday.ceil(date) returns Sundays", () => {
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2010, 11, 31, 23, 59, 59)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2011,  0,  1,  0,  0,  0)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2011,  0,  1,  0,  0,  1)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2011,  0,  1, 23, 59, 59)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2011,  0,  2,  0,  0,  0)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2011,  0,  2,  0,  0,  1)), date.local(2011,  0,  9));
});

it("timeSunday.ceil(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2011,  2, 13,  1)), date.local(2011,  2, 20));
  assert.deepStrictEqual(d3.timeSunday.ceil(date.local(2011, 10,  6,  1)), date.local(2011, 10, 13));
});

it("timeSunday.offset(date) is an alias for timeSunday.offset(date, 1)", () => {
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011,  0,  7, 23, 59, 59, 999));
});

it("timeSunday.offset(date, step) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeSunday.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeSunday.offset(date, step) does not round the passed-in date", () => {
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011,  0,  7, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 17, 23, 59, 59, 456));
});

it("timeSunday.offset(date, step) allows step to be negative", () => {
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11,  1), -1), date.local(2010, 10, 24));
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2011,  0,  1), -2), date.local(2010, 11, 18));
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2011,  0,  1), -1), date.local(2010, 11, 25));
});

it("timeSunday.offset(date, step) allows step to be positive", () => {
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 10, 24), +1), date.local(2010, 11,  1));
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11, 18), +2), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11, 25), +1), date.local(2011,  0,  1));
});

it("timeSunday.offset(date, step) allows step to be zero", () => {
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeSunday.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeSunday.range(start, stop) returns Sundays between start (inclusive) and stop (exclusive)", () => {
  assert.deepStrictEqual(d3.timeSunday.range(date.local(2011, 11,  1), date.local(2012,  0, 15)), [
    date.local(2011, 11,  4),
    date.local(2011, 11, 11),
    date.local(2011, 11, 18),
    date.local(2011, 11, 25),
    date.local(2012,  0,  1),
    date.local(2012,  0,  8)
  ]);
});

it("timeSunday.range(start, stop) returns Sundays", () => {
  assert.deepStrictEqual(d3.timeSunday.range(date.local(2011, 11,  1, 12, 23), date.local(2012,  0, 14, 12, 23)), [
    date.local(2011, 11,  4),
    date.local(2011, 11, 11),
    date.local(2011, 11, 18),
    date.local(2011, 11, 25),
    date.local(2012,  0,  1),
    date.local(2012,  0,  8)
  ]);
});

it("timeSunday.range(start, stop) coerces start and stop to dates", () => {
  assert.deepStrictEqual(d3.timeSunday.range(+date.local(2011, 11,  1), +date.local(2012,  0, 15)), [
    date.local(2011, 11,  4),
    date.local(2011, 11, 11),
    date.local(2011, 11, 18),
    date.local(2011, 11, 25),
    date.local(2012,  0,  1),
    date.local(2012,  0,  8)
  ]);
});

it("timeSunday.range(start, stop) returns the empty array for invalid dates", () => {
  assert.deepStrictEqual(d3.timeSunday.range(new Date(NaN), Infinity), []);
});

it("timeSunday.range(start, stop) returns the empty array if start >= stop", () => {
  assert.deepStrictEqual(d3.timeSunday.range(date.local(2011, 11, 10), date.local(2011, 10,  4)), []);
  assert.deepStrictEqual(d3.timeSunday.range(date.local(2011, 10,  1), date.local(2011, 10,  1)), []);
});

it("timeSunday.range(start, stop, step) returns every step Sunday", () => {
  assert.deepStrictEqual(d3.timeSunday.range(date.local(2011, 11,  1), date.local(2012,  0, 15), 2), [
    date.local(2011, 11,  4),
    date.local(2011, 11, 18),
    date.local(2012,  0,  1)
  ]);
});

it("timeSunday.count(start, end) counts Sundays after start (exclusive) and before end (inclusive)", () => {
  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  assert.strictEqual(d3.timeSunday.count(date.local(2014,  0,  1), date.local(2014,  0,  4)), 0);
  assert.strictEqual(d3.timeSunday.count(date.local(2014,  0,  1), date.local(2014,  0,  5)), 1);
  assert.strictEqual(d3.timeSunday.count(date.local(2014,  0,  1), date.local(2014,  0,  6)), 1);
  assert.strictEqual(d3.timeSunday.count(date.local(2014,  0,  1), date.local(2014,  0, 12)), 2);

  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  assert.strictEqual(d3.timeSunday.count(date.local(2012,  0,  1), date.local(2012,  0,  7)), 0);
  assert.strictEqual(d3.timeSunday.count(date.local(2012,  0,  1), date.local(2012,  0,  8)), 1);
  assert.strictEqual(d3.timeSunday.count(date.local(2012,  0,  1), date.local(2012,  0,  9)), 1);
});

it("timeSunday.count(start, end) observes daylight saving", () => {
  assert.strictEqual(d3.timeSunday.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  1)), 11);
  assert.strictEqual(d3.timeSunday.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  3)), 11);
  assert.strictEqual(d3.timeSunday.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  4)), 11);
  assert.strictEqual(d3.timeSunday.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  0)), 45);
  assert.strictEqual(d3.timeSunday.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  1)), 45);
  assert.strictEqual(d3.timeSunday.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  2)), 45);
});
