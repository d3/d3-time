import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeDays in an alias for timeDay.range", () => {
  assert.strictEqual(d3.timeDays, d3.timeDay.range);
});

it("timeDay() is equivalent to timeDay.floor(new Date)", () => {
  const t = new Date;
  assert.deepStrictEqual(d3.timeDay(), d3.timeDay.floor(t));
});

it("timeDay(date) is equivalent to timeDay.floor(date)", () => {
  const t = new Date;
  assert.deepStrictEqual(d3.timeDay(t), d3.timeDay.floor(t));
});

it("timeDay.floor(date) returns days", () => {
  assert.deepStrictEqual(d3.timeDay.floor(date.local(2010, 11, 31, 23)), date.local(2010, 11, 31));
  assert.deepStrictEqual(d3.timeDay.floor(date.local(2011,  0,  1,  0)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeDay.floor(date.local(2011,  0,  1,  1)), date.local(2011,  0,  1));
});

it("timeDay.floor(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011,  2, 13,  7)), date.local(2011,  2, 12));
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011,  2, 13,  8)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011,  2, 13,  9)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011,  2, 13, 10)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011, 10,  6,  7)), date.local(2011, 10,  6));
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011, 10,  6,  8)), date.local(2011, 10,  6));
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011, 10,  6,  9)), date.local(2011, 10,  6));
  assert.deepStrictEqual(d3.timeDay.floor(date.utc(2011, 10,  6, 10)), date.local(2011, 10,  6));
});

it("timeDay.floor(date) handles years in the first century", () => {
  assert.deepStrictEqual(d3.timeDay.floor(date.local(9, 10,  6,  7)), date.local(9, 10,  6));
});

it("timeDay.round(date) returns days", () => {
  assert.deepStrictEqual(d3.timeDay.round(date.local(2010, 11, 30, 13)), date.local(2010, 11, 31));
  assert.deepStrictEqual(d3.timeDay.round(date.local(2010, 11, 30, 11)), date.local(2010, 11, 30));
});

it("timeDay.round(date) observes daylight saving", () => {
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011,  2, 13,  7)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011,  2, 13,  8)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011,  2, 13,  9)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011,  2, 13, 20)), date.local(2011,  2, 14));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011, 10,  6,  7)), date.local(2011, 10,  6));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011, 10,  6,  8)), date.local(2011, 10,  6));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011, 10,  6,  9)), date.local(2011, 10,  6));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2011, 10,  6, 20)), date.local(2011, 10,  7));
});

it("timeDay.round(date) handles midnight in leap years", () => {
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
  assert.deepStrictEqual(d3.timeDay.round(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
});

it("timeDay.ceil(date) returns days", () => {
  assert.deepStrictEqual(d3.timeDay.ceil(date.local(2010, 11, 30, 23)), date.local(2010, 11, 31));
  assert.deepStrictEqual(d3.timeDay.ceil(date.local(2010, 11, 31,  0)), date.local(2010, 11, 31));
  assert.deepStrictEqual(d3.timeDay.ceil(date.local(2010, 11, 31,  1)), date.local(2011,  0,  1));
});

it("timeDay.ceil(date) observes start of daylight saving", () => {
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011,  2, 13,  7)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011,  2, 13,  8)), date.local(2011,  2, 13));
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011,  2, 13,  9)), date.local(2011,  2, 14));
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011,  2, 13, 10)), date.local(2011,  2, 14));
});

it("timeDay.ceil(date) observes end of daylight saving", () => {
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011, 10,  6,  7)), date.local(2011, 10,  6));
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011, 10,  6,  8)), date.local(2011, 10,  7));
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011, 10,  6,  9)), date.local(2011, 10,  7));
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2011, 10,  6, 10)), date.local(2011, 10,  7));
});

it("timeDay.ceil(date) handles midnight for leap years", () => {
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
  assert.deepStrictEqual(d3.timeDay.ceil(date.utc(2012,  2,  1,  0)), date.local(2012,  2,  1));
});

it("timeDay.offset(date) is an alias for timeDay.offset(date, 1)", () => {
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011,  0,  1, 23, 59, 59, 999));
});

it("timeDay.offset(date, step) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeDay.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeDay.offset(date, step) does not round the passed-in date", () => {
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011,  0,  1, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 29, 23, 59, 59, 456));
});

it("timeDay.offset(date, step) allows step to be negative", () => {
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 31), -1), date.local(2010, 11, 30));
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2011,  0,  1), -2), date.local(2010, 11, 30));
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2011,  0,  1), -1), date.local(2010, 11, 31));
});

it("timeDay.offset(date, step) allows step to be positive", () => {
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 31), +1), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 30), +2), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 30), +1), date.local(2010, 11, 31));
});

it("timeDay.offset(date, step) allows step to be zero", () => {
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeDay.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeDay.range(start, stop) returns days between start (inclusive) and stop (exclusive)", () => {
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011, 10,  4), date.local(2011, 10, 10)), [
    date.local(2011, 10,  4),
    date.local(2011, 10,  5),
    date.local(2011, 10,  6),
    date.local(2011, 10,  7),
    date.local(2011, 10,  8),
    date.local(2011, 10,  9)
  ]);
});

it("timeDay.range(start, stop) returns days", () => {
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011, 10,  4,  2), date.local(2011, 10, 10, 13)), [
    date.local(2011, 10,  5),
    date.local(2011, 10,  6),
    date.local(2011, 10,  7),
    date.local(2011, 10,  8),
    date.local(2011, 10,  9),
    date.local(2011, 10, 10)
  ]);
});

it("timeDay.range(start, stop) coerces start and stop to dates", () => {
  assert.deepStrictEqual(d3.timeDay.range(+date.local(2011, 10,  4), +date.local(2011, 10,  7)), [
    date.local(2011, 10,  4),
    date.local(2011, 10,  5),
    date.local(2011, 10,  6)
  ]);
});

it("timeDay.range(start, stop) returns the empty array for invalid dates", () => {
  assert.deepStrictEqual(d3.timeDay.range(new Date(NaN), Infinity), []);
});

it("timeDay.range(start, stop) returns the empty array if start >= stop", () => {
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011, 10, 10), date.local(2011, 10,  4)), []);
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011, 10, 10), date.local(2011, 10, 10)), []);
});

it("timeDay.range(start, stop, step) returns every step day", () => {
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011, 10,  4,  2), date.local(2011, 10, 14, 13), 3), [
    date.local(2011, 10,  5),
    date.local(2011, 10,  8),
    date.local(2011, 10, 11),
    date.local(2011, 10, 14)
  ]);
});

it("timeDay.range(start, stop, step) returns the empty array if step is zero, negative or NaN", () => {
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011,  0,  1,  0), date.local(2011,  4,  9,  0), 0), []);
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011,  0,  1,  0), date.local(2011,  4,  9,  0), -1), []);
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011,  0,  1,  0), date.local(2011,  4,  9,  0), 0.5), []);
  assert.deepStrictEqual(d3.timeDay.range(date.local(2011,  0,  1,  0), date.local(2011,  4,  9,  0), NaN), []);
});

it("timeDay.count(start, end) counts days after start (exclusive) and before end (inclusive)", () => {
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1,  0), date.local(2011,  4,  9,  0)), 128);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1,  1), date.local(2011,  4,  9,  0)), 128);
  assert.strictEqual(d3.timeDay.count(date.local(2010, 11, 31, 23), date.local(2011,  4,  9,  0)), 129);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1,  0), date.local(2011,  4,  8, 23)), 127);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1,  0), date.local(2011,  4,  9,  1)), 128);
});

it("timeDay.count(start, end) observes daylight saving", () => {
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  1)), 71);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  3)), 71);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1), date.local(2011,  2, 13,  4)), 71);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  0)), 309);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  1)), 309);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1), date.local(2011, 10,  6,  2)), 309);
});

it("timeDay.count(start, stop) does not exhibit floating-point rounding error", () => {
  const date = new Date(2011, 4, 9);
  assert.strictEqual(d3.timeDay.count(d3.timeYear(date), date), 128);
});

it("timeDay.count(start, end) returns 364 or 365 for a full year", () => {
  assert.strictEqual(d3.timeDay.count(date.local(1999,  0,  1), date.local(1999, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2000,  0,  1), date.local(2000, 11, 31)), 365); // leap year
  assert.strictEqual(d3.timeDay.count(date.local(2001,  0,  1), date.local(2001, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2002,  0,  1), date.local(2002, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2003,  0,  1), date.local(2003, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2004,  0,  1), date.local(2004, 11, 31)), 365); // leap year
  assert.strictEqual(d3.timeDay.count(date.local(2005,  0,  1), date.local(2005, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2006,  0,  1), date.local(2006, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2007,  0,  1), date.local(2007, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2008,  0,  1), date.local(2008, 11, 31)), 365); // leap year
  assert.strictEqual(d3.timeDay.count(date.local(2009,  0,  1), date.local(2009, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2010,  0,  1), date.local(2010, 11, 31)), 364);
  assert.strictEqual(d3.timeDay.count(date.local(2011,  0,  1), date.local(2011, 11, 31)), 364);
});

it("timeDay.every(step) returns every stepth day, starting with the first day of the month", () => {
  assert.deepStrictEqual(d3.timeDay.every(3).range(date.local(2008, 11, 30, 0, 12), date.local(2009, 0, 5, 23, 48)), [date.local(2008, 11, 31), date.local(2009, 0, 1), date.local(2009, 0, 4)]);
  assert.deepStrictEqual(d3.timeDay.every(5).range(date.local(2008, 11, 30, 0, 12), date.local(2009, 0, 6, 23, 48)), [date.local(2008, 11, 31), date.local(2009, 0, 1), date.local(2009, 0, 6)]);
  assert.deepStrictEqual(d3.timeDay.every(7).range(date.local(2008, 11, 30, 0, 12), date.local(2009, 0, 8, 23, 48)), [date.local(2009, 0, 1), date.local(2009, 0, 8)]);
});
