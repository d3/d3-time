import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("utcDays in an alias for utcDay.range", () => {
  assert.strictEqual(d3.utcDays, d3.utcDay.range);
});

it("utcDay.floor(date) returns days", () => {
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2010, 11, 31, 23)), date.utc(2010, 11, 31));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011,  0,  1,  0)), date.utc(2011,  0,  1));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011,  0,  1,  1)), date.utc(2011,  0,  1));
});

it("utcDay.floor(date) does not observe daylight saving", () => {
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011,  2, 13,  7)), date.utc(2011,  2, 13));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011,  2, 13,  8)), date.utc(2011,  2, 13));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011,  2, 13,  9)), date.utc(2011,  2, 13));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011,  2, 13, 10)), date.utc(2011,  2, 13));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011, 10,  6,  5)), date.utc(2011, 10,  6));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011, 10,  6,  6)), date.utc(2011, 10,  6));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011, 10,  6,  7)), date.utc(2011, 10,  6));
  assert.deepStrictEqual(d3.utcDay.floor(date.utc(2011, 10,  6,  8)), date.utc(2011, 10,  6));
});

it("utcDay.round(date) returns days", () => {
  assert.deepStrictEqual(d3.utcDay.round(date.utc(2010, 11, 30, 13)), date.utc(2010, 11, 31));
  assert.deepStrictEqual(d3.utcDay.round(date.utc(2010, 11, 30, 11)), date.utc(2010, 11, 30));
});

it("utcDay.ceil(date) returns days", () => {
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2010, 11, 30, 23)), date.utc(2010, 11, 31));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2010, 11, 31,  0)), date.utc(2010, 11, 31));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2010, 11, 31,  1)), date.utc(2011,  0,  1));
});

it("utcDay.ceil(date) does not observe daylight saving", () => {
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011,  2, 13,  7)), date.utc(2011,  2, 14));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011,  2, 13,  8)), date.utc(2011,  2, 14));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011,  2, 13,  9)), date.utc(2011,  2, 14));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011,  2, 13, 10)), date.utc(2011,  2, 14));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011, 10,  6,  5)), date.utc(2011, 10,  7));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011, 10,  6,  6)), date.utc(2011, 10,  7));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011, 10,  6,  7)), date.utc(2011, 10,  7));
  assert.deepStrictEqual(d3.utcDay.ceil(date.utc(2011, 10,  6,  8)), date.utc(2011, 10,  7));
});

it("utcDay.offset(date) is an alias for utcDay.offset(date, 1)", () => {
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011,  0,  1, 23, 59, 59, 999));
});

it("utcDay.offset(date, step) does not modify the passed-in date", () => {
  const d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  d3.utcDay.offset(d, +1);
  assert.deepStrictEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
});

it("utcDay.offset(date, step) does not round the passed-in date", () => {
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011,  0,  1, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 29, 23, 59, 59, 456));
});

it("utcDay.offset(date, step) allows step to be negative", () => {
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 31), -1), date.utc(2010, 11, 30));
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2011,  0,  1), -2), date.utc(2010, 11, 30));
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2011,  0,  1), -1), date.utc(2010, 11, 31));
});

it("utcDay.offset(date, step) allows step to be positive", () => {
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 31), +1), date.utc(2011,  0,  1));
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 30), +2), date.utc(2011,  0,  1));
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 30), +1), date.utc(2010, 11, 31));
});

it("utcDay.offset(date, step) allows step to be zero", () => {
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 58,   0), 0), date.utc(2010, 11, 31, 23, 59, 58,   0));
});

it("utcDay.count(start, end) counts days after start (exclusive) and before end (inclusive)", () => {
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1,  0), date.utc(2011,  4,  9,  0)), 128);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1,  1), date.utc(2011,  4,  9,  0)), 128);
  assert.strictEqual(d3.utcDay.count(date.utc(2010, 11, 31, 23), date.utc(2011,  4,  9,  0)), 129);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1,  0), date.utc(2011,  4,  8, 23)), 127);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1,  0), date.utc(2011,  4,  9,  1)), 128);
});

it("utcDay.count(start, end) does not observe daylight saving", () => {
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1), date.utc(2011,  2, 13,  1)), 71);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1), date.utc(2011,  2, 13,  3)), 71);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1), date.utc(2011,  2, 13,  4)), 71);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1), date.utc(2011, 10,  6,  0)), 309);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1), date.utc(2011, 10,  6,  1)), 309);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1), date.utc(2011, 10,  6,  2)), 309);
});

it("utcDay.count(start, end) returns 364 or 365 for a full year", () => {
  assert.strictEqual(d3.utcDay.count(date.utc(1999,  0,  1), date.utc(1999, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2000,  0,  1), date.utc(2000, 11, 31)), 365); // leap year
  assert.strictEqual(d3.utcDay.count(date.utc(2001,  0,  1), date.utc(2001, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2002,  0,  1), date.utc(2002, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2003,  0,  1), date.utc(2003, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2004,  0,  1), date.utc(2004, 11, 31)), 365); // leap year
  assert.strictEqual(d3.utcDay.count(date.utc(2005,  0,  1), date.utc(2005, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2006,  0,  1), date.utc(2006, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2007,  0,  1), date.utc(2007, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2008,  0,  1), date.utc(2008, 11, 31)), 365); // leap year
  assert.strictEqual(d3.utcDay.count(date.utc(2009,  0,  1), date.utc(2009, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2010,  0,  1), date.utc(2010, 11, 31)), 364);
  assert.strictEqual(d3.utcDay.count(date.utc(2011,  0,  1), date.utc(2011, 11, 31)), 364);
});

it("utcDay.every(step) returns every stepth day, starting with the first day of the month", () => {
  assert.deepStrictEqual(d3.utcDay.every(3).range(date.utc(2008, 11, 30, 0, 12), date.utc(2009, 0, 5, 23, 48)), [date.utc(2008, 11, 31), date.utc(2009, 0, 1), date.utc(2009, 0, 4)]);
  assert.deepStrictEqual(d3.utcDay.every(5).range(date.utc(2008, 11, 30, 0, 12), date.utc(2009, 0, 6, 23, 48)), [date.utc(2008, 11, 31), date.utc(2009, 0, 1), date.utc(2009, 0, 6)]);
  assert.deepStrictEqual(d3.utcDay.every(7).range(date.utc(2008, 11, 30, 0, 12), date.utc(2009, 0, 8, 23, 48)), [date.utc(2009, 0, 1), date.utc(2009, 0, 8)]);
});
