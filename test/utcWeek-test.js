import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("utcWeek.floor(date) returns sundays", () => {
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2010, 11, 26));
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2011,  0,  1,  0,  0,  0)), date.utc(2010, 11, 26));
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2011,  0,  1,  0,  0,  1)), date.utc(2010, 11, 26));
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2011,  0,  1, 23, 59, 59)), date.utc(2010, 11, 26));
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2011,  0,  2,  0,  0,  0)), date.utc(2011,  0,  2));
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2011,  0,  2,  0,  0,  1)), date.utc(2011,  0,  2));
});

it("utcWeek.floor(date) observes the start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2011,  2, 13,  1)), date.utc(2011,  2, 13));
});

it("utcWeek.floor(date) observes the end of the daylight savings time", () => {
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(2011, 10,  6,  1)), date.utc(2011, 10,  6));
});

it("utcWeek.floor(date) correctly handles years in the first century", () => {
  assert.deepStrictEqual(d3.utcWeek.floor(date.utc(9, 10,  6,  7)), date.utc(9, 10,  1));
});

it("utcWeek.ceil(date) returns sundays", () => {
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2011,  0,  2));
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2011,  0,  1,  0,  0,  0)), date.utc(2011,  0,  2));
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2011,  0,  1,  0,  0,  1)), date.utc(2011,  0,  2));
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2011,  0,  1, 23, 59, 59)), date.utc(2011,  0,  2));
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2011,  0,  2,  0,  0,  0)), date.utc(2011,  0,  2));
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2011,  0,  2,  0,  0,  1)), date.utc(2011,  0,  9));
});

it("utcWeek.ceil(date) does not observe the start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2011,  2, 13,  1)), date.utc(2011,  2, 20));
});

it("utcWeek.ceil(date) does not observe the end of the daylight savings time", () => {
  assert.deepStrictEqual(d3.utcWeek.ceil(date.utc(2011, 10,  6,  1)), date.utc(2011, 10, 13));
});

it("utcWeek.offset(date, step) does not modify the passed-in date", () => {
  const d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  d3.utcWeek.offset(d, +1);
  assert.deepStrictEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
});

it("utcWeek.offset(date, step) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011,  0,  7, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 17, 23, 59, 59, 456));
});

it("utcWeek.offset(date, step) allows negative offsets", () => {
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 11,  1), -1), date.utc(2010, 10, 24));
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2011,  0,  1), -2), date.utc(2010, 11, 18));
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2011,  0,  1), -1), date.utc(2010, 11, 25));
});

it("utcWeek.offset(date, step) allows positive offsets", () => {
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 10, 24), +1), date.utc(2010, 11,  1));
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 11, 18), +2), date.utc(2011,  0,  1));
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 11, 25), +1), date.utc(2011,  0,  1));
});

it("utcWeek.offset(date, step) allows zero offset", () => {
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 58,   0), 0), date.utc(2010, 11, 31, 23, 59, 58,   0));
});

it("utcWeek.range(start, stop) returns sundays", () => {
  assert.deepStrictEqual(d3.utcWeek.range(date.utc(2010, 11, 21), date.utc(2011, 0, 12)), [
    date.utc(2010, 11, 26),
    date.utc(2011, 0, 2),
    date.utc(2011, 0, 9)
  ]);
});

it("utcWeek.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.utcWeek.range(date.utc(2010, 11, 21), date.utc(2011, 0, 12))[0], date.utc(2010, 11, 26));
});

it("utcWeek.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.utcWeek.range(date.utc(2010, 11, 21), date.utc(2011, 0, 12))[2], date.utc(2011, 0, 9));
});

it("utcWeek.range(start, stop) can skip weeks", () => {
  assert.deepStrictEqual(d3.utcWeek.range(date.utc(2011, 0, 1), date.utc(2011, 3, 1), 4), [
    date.utc(2011, 0, 2),
    date.utc(2011, 0, 30),
    date.utc(2011, 1, 27),
    date.utc(2011, 2, 27)
  ]);
});

it("utcWeek.range(start, stop) does not observe start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcWeek.range(date.utc(2011, 2, 1), date.utc(2011, 2, 28)), [
    date.utc(2011, 2, 6),
    date.utc(2011, 2, 13),
    date.utc(2011, 2, 20),
    date.utc(2011, 2, 27)
  ]);
});

it("utcWeek.range(start, stop) does not observe end of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcWeek.range(date.utc(2011, 10, 1), date.utc(2011, 10, 30)), [
    date.utc(2011, 10, 6),
    date.utc(2011, 10, 13),
    date.utc(2011, 10, 20),
    date.utc(2011, 10, 27)
  ]);
});

it("utcWeek is an alias for utcSunday", () => {
  assert.strictEqual(d3.utcWeek, d3.utcSunday);
});

it("utcWeek.every(step) returns every stepth Sunday, starting with the first Sunday of the month", () => {
  assert.deepStrictEqual(d3.utcWeek.every(2).range(date.utc(2008, 11, 3), date.utc(2009, 1, 5)), [date.utc(2008, 11, 7), date.utc(2008, 11, 21), date.utc(2009, 0, 4), date.utc(2009, 0, 18), date.utc(2009, 1, 1)]);
});
