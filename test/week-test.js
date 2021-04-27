import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeWeek.floor(date) returns sundays", () => {
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2010, 11, 31, 23, 59, 59)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2011,  0,  1,  0,  0,  0)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2011,  0,  1,  0,  0,  1)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2011,  0,  1, 23, 59, 59)), date.local(2010, 11, 26));
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2011,  0,  2,  0,  0,  0)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2011,  0,  2,  0,  0,  1)), date.local(2011,  0,  2));
});

it("timeWeek.floor(date) observes the start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2011,  2, 13,  1)), date.local(2011,  2, 13));
});

it("timeWeek.floor(date) observes the end of the daylight savings time", () => {
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(2011, 10,  6,  1)), date.local(2011, 10,  6));
});

it("timeWeek.floor(date) correctly handles years in the first century", () => {
  assert.deepStrictEqual(d3.timeWeek.floor(date.local(9, 10,  6,  7)), date.local(9, 10,  1));
});

it("timeWeek.ceil(date) returns sundays", () => {
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2010, 11, 31, 23, 59, 59)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2011,  0,  1,  0,  0,  0)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2011,  0,  1,  0,  0,  1)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2011,  0,  1, 23, 59, 59)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2011,  0,  2,  0,  0,  0)), date.local(2011,  0,  2));
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2011,  0,  2,  0,  0,  1)), date.local(2011,  0,  9));
});

it("timeWeek.ceil(date) observes the start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2011,  2, 13,  1)), date.local(2011,  2, 20));
});

it("timeWeek.ceil(date) observes the end of the daylight savings time", () => {
  assert.deepStrictEqual(d3.timeWeek.ceil(date.local(2011, 10,  6,  1)), date.local(2011, 10, 13));
});

it("timeWeek.offset(date, step) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeWeek.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeWeek.offset(date, step) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011,  0,  7, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 17, 23, 59, 59, 456));
});

it("timeWeek.offset(date, step) allows negative offsets", () => {
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 11,  1), -1), date.local(2010, 10, 24));
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2011,  0,  1), -2), date.local(2010, 11, 18));
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2011,  0,  1), -1), date.local(2010, 11, 25));
});

it("timeWeek.offset(date, step) allows positive offsets", () => {
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 10, 24), +1), date.local(2010, 11,  1));
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 11, 18), +2), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 11, 25), +1), date.local(2011,  0,  1));
});

it("timeWeek.offset(date, step) allows zero offset", () => {
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeWeek.range(start, stop) returns sundays", () => {
  assert.deepStrictEqual(d3.timeWeek.range(date.local(2010, 11, 21), date.local(2011, 0, 12)), [
    date.local(2010, 11, 26),
    date.local(2011, 0, 2),
    date.local(2011, 0, 9)
  ]);
});

it("timeWeek.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.timeWeek.range(date.local(2010, 11, 21), date.local(2011, 0, 12))[0], date.local(2010, 11, 26));
});

it("timeWeek.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.timeWeek.range(date.local(2010, 11, 21), date.local(2011, 0, 12))[2], date.local(2011, 0, 9));
});

it("timeWeek.range(start, stop) can skip weeks", () => {
  assert.deepStrictEqual(d3.timeWeek.range(date.local(2011, 0, 1), date.local(2011, 3, 1), 4), [
    date.local(2011, 0, 2),
    date.local(2011, 0, 30),
    date.local(2011, 1, 27),
    date.local(2011, 2, 27)
  ]);
});

it("timeWeek.range(start, stop) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeWeek.range(date.local(2011, 2, 1), date.local(2011, 2, 28)), [
    date.local(2011, 2, 6),
    date.local(2011, 2, 13),
    date.local(2011, 2, 20),
    date.local(2011, 2, 27)
  ]);
});

it("timeWeek.range(start, stop) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeWeek.range(date.local(2011, 10, 1), date.local(2011, 10, 30)), [
    date.local(2011, 10, 6),
    date.local(2011, 10, 13),
    date.local(2011, 10, 20),
    date.local(2011, 10, 27)
  ]);
});

it("timeWeek is an alias for timeSunday", () => {
  assert.strictEqual(d3.timeWeek, d3.timeSunday);
});

it("timeWeek.every(step) returns every stepth Sunday, starting with the first Sunday of the month", () => {
  assert.deepStrictEqual(d3.timeWeek.every(2).range(date.local(2008, 11, 3), date.local(2009, 1, 5)), [date.local(2008, 11, 7), date.local(2008, 11, 21), date.local(2009, 0, 4), date.local(2009, 0, 18), date.local(2009, 1, 1)]);
});
