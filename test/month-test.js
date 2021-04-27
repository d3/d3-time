import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeMonths in an alias for timeMonth.range", () => {
  assert.strictEqual(d3.timeMonths, d3.timeMonth.range);
});

it("timeMonth.floor(date) returns months", () => {
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2010, 11, 31, 23, 59, 59)), date.local(2010, 11,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2011,  0,  1,  0,  0,  0)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2011,  0,  1,  0,  0,  1)), date.local(2011,  0,  1));
});

it("timeMonth.floor(date) observes the start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2011,  2, 13,  1)), date.local(2011,  2,  1));
});

it("timeMonth.floor(date) observes the end of the daylight savings time", () => {
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2011, 10,  6,  1)), date.local(2011, 10,  1));
});

it("timeMonth.floor(date) correctly handles years in the first century", () => {
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(9, 10,  6,  7)), date.local(9, 10,  1));
});

it("timeMonth.ceil(date) returns months", () => {
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2010, 11, 31, 23, 59, 59)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2011,  0,  1,  0,  0,  0)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2011,  0,  1,  0,  0,  1)), date.local(2011,  1,  1));
});

it("timeMonth.ceil(date) observes the start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2011,  2, 13,  1)), date.local(2011,  3,  1));
});

it("timeMonth.ceil(date) observes the end of the daylight savings time", () => {
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2011, 10,  6,  1)), date.local(2011, 11,  1));
});

it("timeMonth.offset(date) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeMonth.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeMonth.offset(date) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011,  0, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010,  9, 31, 23, 59, 59, 456));
});

it("timeMonth.offset(date) allows negative offsets", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11,  1), -1), date.local(2010, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2011,  0,  1), -2), date.local(2010, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2011,  0,  1), -1), date.local(2010, 11,  1));
});

it("timeMonth.offset(date) allows positive offsets", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 10,  1), +1), date.local(2010, 11,  1));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 10,  1), +2), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11,  1), +1), date.local(2011,  0,  1));
});

it("timeMonth.offset(date) allows zero offset", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeMonths in an alias for timeMonth.range", () => {
  assert.strictEqual(d3.timeMonths, d3.timeMonth.range);
});

it("timeMonth.floor(date) returns months", () => {
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2010, 11, 31, 23)), date.local(2010, 11,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2011,  0,  1,  0)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(2011,  0,  1,  1)), date.local(2011,  0,  1));
});

it("timeMonth.floor(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011,  2, 13,  7)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011,  2, 13,  8)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011,  2, 13,  9)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011,  2, 13, 10)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011, 10,  6,  7)), date.local(2011, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011, 10,  6,  8)), date.local(2011, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011, 10,  6,  9)), date.local(2011, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.floor(date.utc(2011, 10,  6, 10)), date.local(2011, 10,  1));
});

it("timeMonth.floor(date) handles years in the first century", () => {
  assert.deepStrictEqual(d3.timeMonth.floor(date.local(9, 10,  6,  7)), date.local(9, 10,  1));
});

it("timeMonth.round(date) returns months", () => {
  assert.deepStrictEqual(d3.timeMonth.round(date.local(2010, 11, 16, 12)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.local(2010, 11, 16, 11)), date.local(2010, 11,  1));
});

it("timeMonth.round(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011,  2, 13,  7)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011,  2, 13,  8)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011,  2, 13,  9)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011,  2, 13, 20)), date.local(2011,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011, 10,  6,  7)), date.local(2011, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011, 10,  6,  8)), date.local(2011, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011, 10,  6,  9)), date.local(2011, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2011, 10,  6, 20)), date.local(2011, 10,  1));
});

it("timeMonth.round(date) handles midnight for leap years", () => {
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.round(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
});

it("timeMonth.ceil(date) returns months", () => {
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2010, 10, 30, 23)), date.local(2010, 11,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2010, 11,  1,  1)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2011, 1, 1)), date.local(2011, 1, 1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2011, 2, 1)), date.local(2011, 2, 1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.local(2011, 3, 1)), date.local(2011, 3, 1));
});

it("timeMonth.ceil(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011,  2, 13,  7)), date.local(2011,  3,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011,  2, 13,  8)), date.local(2011,  3,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011,  2, 13,  9)), date.local(2011,  3,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011,  2, 13, 10)), date.local(2011,  3,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011, 10,  6,  7)), date.local(2011, 11,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011, 10,  6,  8)), date.local(2011, 11,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011, 10,  6,  9)), date.local(2011, 11,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2011, 10,  6, 10)), date.local(2011, 11,  1));
});

it("timeMonth.ceil(date) handles midnight for leap years", () => {
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
  assert.deepStrictEqual(d3.timeMonth.ceil(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
});

it("timeMonth.offset(date) is an alias for timeMonth.offset(date, 1)", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011,  0, 31, 23, 59, 59, 999));
});

it("timeMonth.offset(date, step) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeMonth.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeMonth.offset(date, step) does not round the passed-in date", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011,  0, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010,  9, 31, 23, 59, 59, 456));
});

it("timeMonth.offset(date, step) allows step to be negative", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31), -1), date.local(2010, 10, 31));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2011,  0,  1), -2), date.local(2010, 10,  1));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2011,  0,  1), -1), date.local(2010, 11,  1));
});

it("timeMonth.offset(date, step) allows step to be positive", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31), +1), date.local(2011,  0, 31));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 30), +2), date.local(2011,  1, 30));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 30), +1), date.local(2011,  0, 30));
});

it("timeMonth.offset(date, step) allows step to be zero", () => {
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeMonth.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeMonth.range(start, stop) returns months between start (inclusive) and stop (exclusive)", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2011, 11,  1), date.local(2012,  5,  1)), [
    date.local(2011, 11,  1),
    date.local(2012,  0,  1),
    date.local(2012,  1,  1),
    date.local(2012,  2,  1),
    date.local(2012,  3,  1),
    date.local(2012,  4,  1)
  ]);
});

it("timeMonth.range(start, stop) returns months", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2011, 10,  4,  2), date.local(2012,  4, 10, 13)), [
    date.local(2011, 11,  1),
    date.local(2012,  0,  1),
    date.local(2012,  1,  1),
    date.local(2012,  2,  1),
    date.local(2012,  3,  1),
    date.local(2012,  4,  1)
  ]);
});

it("timeMonth.range(start, stop) coerces start and stop to dates", () => {
  assert.deepStrictEqual(d3.timeMonth.range(+date.local(2011, 10,  4), +date.local(2012,  1,  7)), [
    date.local(2011, 11,  1),
    date.local(2012,  0,  1),
    date.local(2012,  1,  1)
  ]);
});

it("timeMonth.range(start, stop) returns the empty array for invalid dates", () => {
  assert.deepStrictEqual(d3.timeMonth.range(new Date(NaN), Infinity), []);
});

it("timeMonth.range(start, stop) returns the empty array if start >= stop", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2011, 11, 10), date.local(2011, 10,  4)), []);
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2011, 10,  1), date.local(2011, 10,  1)), []);
});

it("timeMonth.range(start, stop) returns months", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2010, 10, 31), date.local(2011, 2, 1)), [
    date.local(2010, 11, 1),
    date.local(2011, 0, 1),
    date.local(2011, 1, 1)
  ]);
});

it("timeMonth.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2010, 10, 31), date.local(2011, 2, 1))[0], date.local(2010, 11, 1));
});

it("timeMonth.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2010, 10, 31), date.local(2011, 2, 1))[2], date.local(2011, 1, 1));
});

it("timeMonth.range(start, stop) can skip months", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2011, 1, 1), date.local(2012, 1, 1), 3), [
    date.local(2011, 1, 1),
    date.local(2011, 4, 1),
    date.local(2011, 7, 1),
    date.local(2011, 10, 1)
  ]);
});

it("timeMonth.range(start, stop) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2011, 0, 1), date.local(2011, 4, 1)), [
    date.local(2011, 0, 1),
    date.local(2011, 1, 1),
    date.local(2011, 2, 1),
    date.local(2011, 3, 1)
  ]);
});

it("timeMonth.range(start, stop) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeMonth.range(date.local(2011, 9, 1), date.local(2012, 1, 1)), [
    date.local(2011, 9, 1),
    date.local(2011, 10, 1),
    date.local(2011, 11, 1),
    date.local(2012, 0, 1)
  ]);
});

it("timeMonth.count(start, end) counts months after start (exclusive) and before end (inclusive)", () => {
  assert.strictEqual(d3.timeMonth.count(date.local(2011,  0,  1), date.local(2011,  4,  1)), 4);
  assert.strictEqual(d3.timeMonth.count(date.local(2011,  0,  1), date.local(2011,  3, 30)), 3);
  assert.strictEqual(d3.timeMonth.count(date.local(2010, 11, 31), date.local(2011,  3, 30)), 4);
  assert.strictEqual(d3.timeMonth.count(date.local(2010, 11, 31), date.local(2011,  4,  1)), 5);
  assert.strictEqual(d3.timeMonth.count(date.local(2009, 11, 31), date.local(2012,  4,  1)), 29);
  assert.strictEqual(d3.timeMonth.count(date.local(2012,  4,  1), date.local(2009, 11, 31)), -29);
});

it("timeMonth.every(step) returns every stepth month, starting with the first month of the year", () => {
  assert.deepStrictEqual(d3.timeMonth.every(3).range(date.local(2008, 11, 3), date.local(2010, 6, 5)), [date.local(2009, 0, 1), date.local(2009, 3, 1), date.local(2009, 6, 1), date.local(2009, 9, 1), date.local(2010, 0, 1), date.local(2010, 3, 1), date.local(2010, 6, 1)]);
});
