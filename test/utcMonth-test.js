import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("utcMonths in an alias for utcMonth.range", () => {
  assert.strictEqual(d3.utcMonths, d3.utcMonth.range);
});

it("utcMonth.floor(date) returns months", () => {
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2010, 11, 31, 23)), date.utc(2010, 11,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011,  0,  1,  0)), date.utc(2011,  0,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011,  0,  1,  1)), date.utc(2011,  0,  1));
});

it("utcMonth.floor(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011,  2, 13,  7)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011,  2, 13,  8)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011,  2, 13,  9)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011,  2, 13, 10)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011, 10,  6,  7)), date.utc(2011, 10,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011, 10,  6,  8)), date.utc(2011, 10,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011, 10,  6,  9)), date.utc(2011, 10,  1));
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(2011, 10,  6, 10)), date.utc(2011, 10,  1));
});

it("utcMonth.floor(date) handles years in the first century", () => {
  assert.deepStrictEqual(d3.utcMonth.floor(date.utc(9, 10,  6,  7)), date.utc(9, 10,  1));
});

it("utcMonth.round(date) returns months", () => {
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2010, 11, 16, 12)), date.utc(2011,  0,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2010, 11, 16, 11)), date.utc(2010, 11,  1));
});

it("utcMonth.round(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011,  2, 13,  7)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011,  2, 13,  8)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011,  2, 13,  9)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011,  2, 13, 20)), date.utc(2011,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011, 10,  6,  7)), date.utc(2011, 10,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011, 10,  6,  8)), date.utc(2011, 10,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011, 10,  6,  9)), date.utc(2011, 10,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2011, 10,  6, 20)), date.utc(2011, 10,  1));
});

it("utcMonth.round(date) handles midnight for leap years", () => {
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2012,  2,  1,  0)), date.utc(2012,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.round(date.utc(2012,  2,  1,  0)), date.utc(2012,  2,  1));
});

it("utcMonth.ceil(date) returns months", () => {
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2010, 10, 30, 23)), date.utc(2010, 11,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2010, 11,  1,  1)), date.utc(2011,  0,  1));
});

it("utcMonth.ceil(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011,  2, 13,  7)), date.utc(2011,  3,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011,  2, 13,  8)), date.utc(2011,  3,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011,  2, 13,  9)), date.utc(2011,  3,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011,  2, 13, 10)), date.utc(2011,  3,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011, 10,  6,  7)), date.utc(2011, 11,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011, 10,  6,  8)), date.utc(2011, 11,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011, 10,  6,  9)), date.utc(2011, 11,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2011, 10,  6, 10)), date.utc(2011, 11,  1));
});

it("utcMonth.ceil(date) handles midnight for leap years", () => {
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2012,  2,  1,  0)), date.utc(2012,  2,  1));
  assert.deepStrictEqual(d3.utcMonth.ceil(date.utc(2012,  2,  1,  0)), date.utc(2012,  2,  1));
});

it("utcMonth.offset(date) is an alias for utcMonth.offset(date, 1)", () => {
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011,  0, 31, 23, 59, 59, 999));
});

it("utcMonth.offset(date, step) does not modify the passed-in date", () => {
  const d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  d3.utcMonth.offset(d, +1);
  assert.deepStrictEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
});

it("utcMonth.offset(date, step) does not round the passed-in date", () => {
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011,  0, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010,  9, 31, 23, 59, 59, 456));
});

it("utcMonth.offset(date, step) allows step to be negative", () => {
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 31), -1), date.utc(2010, 10, 31));
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2011,  0,  1), -2), date.utc(2010, 10,  1));
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2011,  0,  1), -1), date.utc(2010, 11,  1));
});

it("utcMonth.offset(date, step) allows step to be positive", () => {
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 31), +1), date.utc(2011,  0, 31));
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 30), +2), date.utc(2011,  1, 30));
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 30), +1), date.utc(2011,  0, 30));
});

it("utcMonth.offset(date, step) allows step to be zero", () => {
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 58,   0), 0), date.utc(2010, 11, 31, 23, 59, 58,   0));
});

it("utcMonth.range(start, stop) returns months between start (inclusive) and stop (exclusive)", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2011, 11,  1), date.utc(2012,  5,  1)), [
    date.utc(2011, 11,  1),
    date.utc(2012,  0,  1),
    date.utc(2012,  1,  1),
    date.utc(2012,  2,  1),
    date.utc(2012,  3,  1),
    date.utc(2012,  4,  1)
  ]);
});

it("utcMonth.range(start, stop) returns months", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2011, 10,  4,  2), date.utc(2012,  4, 10, 13)), [
    date.utc(2011, 11,  1),
    date.utc(2012,  0,  1),
    date.utc(2012,  1,  1),
    date.utc(2012,  2,  1),
    date.utc(2012,  3,  1),
    date.utc(2012,  4,  1)
  ]);
});

it("utcMonth.range(start, stop) coerces start and stop to dates", () => {
  assert.deepStrictEqual(d3.utcMonth.range(+date.utc(2011, 10,  4), +date.utc(2012,  1,  7)), [
    date.utc(2011, 11,  1),
    date.utc(2012,  0,  1),
    date.utc(2012,  1,  1)
  ]);
});

it("utcMonth.range(start, stop) returns the empty array for invalid dates", () => {
  assert.deepStrictEqual(d3.utcMonth.range(new Date(NaN), Infinity), []);
});

it("utcMonth.range(start, stop) returns the empty array if start >= stop", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2011, 11, 10), date.utc(2011, 10,  4)), []);
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2011, 10,  1), date.utc(2011, 10,  1)), []);
});

it("utcMonth.range(start, stop) returns months", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2010, 10, 31), date.utc(2011, 2, 1)), [
    date.utc(2010, 11, 1),
    date.utc(2011, 0, 1),
    date.utc(2011, 1, 1)
  ]);
});

it("utcMonth.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2010, 10, 31), date.utc(2011, 2, 1))[0], date.utc(2010, 11, 1));
});

it("utcMonth.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2010, 10, 31), date.utc(2011, 2, 1))[2], date.utc(2011, 1, 1));
});

it("utcMonth.range(start, stop) can skip months", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2011, 1, 1), date.utc(2012, 1, 1), 3), [
    date.utc(2011, 1, 1),
    date.utc(2011, 4, 1),
    date.utc(2011, 7, 1),
    date.utc(2011, 10, 1)
  ]);
});

it("utcMonth.range(start, stop) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2011, 0, 1), date.utc(2011, 4, 1)), [
    date.utc(2011, 0, 1),
    date.utc(2011, 1, 1),
    date.utc(2011, 2, 1),
    date.utc(2011, 3, 1)
  ]);
});

it("utcMonth.range(start, stop) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcMonth.range(date.utc(2011, 9, 1), date.utc(2012, 1, 1)), [
    date.utc(2011, 9, 1),
    date.utc(2011, 10, 1),
    date.utc(2011, 11, 1),
    date.utc(2012, 0, 1)
  ]);
});

it("utcMonth.count(start, end) counts months after start (exclusive) and before end (inclusive)", () => {
  assert.strictEqual(d3.utcMonth.count(date.utc(2011,  0,  1), date.utc(2011,  4,  1)), 4);
  assert.strictEqual(d3.utcMonth.count(date.utc(2011,  0,  1), date.utc(2011,  3, 30)), 3);
  assert.strictEqual(d3.utcMonth.count(date.utc(2010, 11, 31), date.utc(2011,  3, 30)), 4);
  assert.strictEqual(d3.utcMonth.count(date.utc(2010, 11, 31), date.utc(2011,  4,  1)), 5);
  assert.strictEqual(d3.utcMonth.count(date.utc(2009, 11, 31), date.utc(2012,  4,  1)), 29);
  assert.strictEqual(d3.utcMonth.count(date.utc(2012,  4,  1), date.utc(2009, 11, 31)), -29);
});

it("utcMonth.every(step) returns every stepth month, starting with the first month of the year", () => {
  assert.deepStrictEqual(d3.utcMonth.every(3).range(date.utc(2008, 11, 3), date.utc(2010, 6, 5)), [date.utc(2009, 0, 1), date.utc(2009, 3, 1), date.utc(2009, 6, 1), date.utc(2009, 9, 1), date.utc(2010, 0, 1), date.utc(2010, 3, 1), date.utc(2010, 6, 1)]);
});
