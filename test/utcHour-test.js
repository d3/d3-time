import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("utcHour.floor(date) returns hours", () => {
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2010, 11, 31, 23, 59)), date.utc(2010, 11, 31, 23));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  0,  1,  0,  0)), date.utc(2011,  0,  1,  0));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  0,  1,  0,  1)), date.utc(2011,  0,  1,  0));
});

it("utcHour.floor(date) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  2, 13,  8, 59)), date.utc(2011,  2, 13,  8));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  2, 13,  9,  0)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  2, 13,  9,  1)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  2, 13,  9, 59)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  2, 13, 10,  0)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011,  2, 13, 10,  1)), date.utc(2011,  2, 13, 10));
});

it("utcHour.floor(date) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011, 10,  6,  7, 59)), date.utc(2011, 10,  6,  7));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011, 10,  6,  8,  0)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011, 10,  6,  8,  1)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011, 10,  6,  8, 59)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011, 10,  6,  9,  0)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.utcHour.floor(date.utc(2011, 10,  6,  9,  1)), date.utc(2011, 10,  6,  9));
});


it("utcHour.ceil(date) returns hours", () => {
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2010, 11, 31, 23, 59)), date.utc(2011,  0,  1,  0));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  0,  1,  0,  0)), date.utc(2011,  0,  1,  0));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  0,  1,  0,  1)), date.utc(2011,  0,  1,  1));
});

it("utcHour.ceil(date) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  2, 13,  8, 59)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  2, 13,  9,  0)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  2, 13,  9,  1)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  2, 13,  9, 59)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  2, 13, 10,  0)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011,  2, 13, 10,  1)), date.utc(2011,  2, 13, 11));
});

it("utcHour.ceil(date) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011, 10,  6,  7, 59)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011, 10,  6,  8,  0)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011, 10,  6,  8,  1)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011, 10,  6,  8, 59)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011, 10,  6,  9,  0)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.utcHour.ceil(date.utc(2011, 10,  6,  9,  1)), date.utc(2011, 10,  6, 10));
});

it("utcHour.offset(date) does not modify the passed-in date", () => {
  const d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  d3.utcHour.offset(d, +1);
  assert.deepStrictEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
});

it("utcHour.offset(date) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011,  0,  1,  0, 59, 59, 999));
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 31, 21, 59, 59, 456));
});

it("utcHour.offset(date) allows negative offsets", () => {
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 12), -1), date.utc(2010, 11, 31, 11));
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2011,  0,  1,  1), -2), date.utc(2010, 11, 31, 23));
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2011,  0,  1,  0), -1), date.utc(2010, 11, 31, 23));
});

it("utcHour.offset(date) allows positive offsets", () => {
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 11), +1), date.utc(2010, 11, 31, 12));
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 23), +2), date.utc(2011,  0,  1,  1));
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 23), +1), date.utc(2011,  0,  1,  0));
});

it("utcHour.offset(date) allows zero offset", () => {
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 58,   0), 0), date.utc(2010, 11, 31, 23, 59, 58,   0));
});

it("utcHour.range(start, stop) returns hours", () => {
  assert.deepStrictEqual(d3.utcHour.range(date.utc(2010, 11, 31, 12, 30), date.utc(2010, 11, 31, 15, 30)), [
    date.utc(2010, 11, 31, 13),
    date.utc(2010, 11, 31, 14),
    date.utc(2010, 11, 31, 15)
  ]);
});

it("utcHour.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.utcHour.range(date.utc(2010, 11, 31, 23), date.utc(2011, 0, 1, 2))[0], date.utc(2010, 11, 31, 23));
});

it("utcHour.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.utcHour.range(date.utc(2010, 11, 31, 23), date.utc(2011, 0, 1, 2))[2], date.utc(2011, 0, 1, 1));
});

it("utcHour.range(start, stop) can skip hours", () => {
  assert.deepStrictEqual(d3.utcHour.range(date.utc(2011, 1, 1, 1), date.utc(2011, 1, 1, 13), 3), [
    date.utc(2011, 1, 1, 1),
    date.utc(2011, 1, 1, 4),
    date.utc(2011, 1, 1, 7),
    date.utc(2011, 1, 1, 10)
  ]);
});

it("utcHour.range(start, stop) does not observe the start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcHour.range(date.utc(2011, 2, 13, 1), date.utc(2011, 2, 13, 5)), [
    date.utc(2011, 2, 13, 1),
    date.utc(2011, 2, 13, 2),
    date.utc(2011, 2, 13, 3),
    date.utc(2011, 2, 13, 4)
  ]);
});

it("utcHour.range(start, stop) does not observe the end of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcHour.range(date.utc(2011, 10, 6, 0), date.utc(2011, 10, 6, 2)), [
    date.utc(2011, 10, 6, 0),
    date.utc(2011, 10, 6, 1)
  ]);
});

it("utcHour.every(step) returns every stepth hour, starting with the first hour of the day", () => {
  assert.deepStrictEqual(d3.utcHour.every(4).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 31, 13, 57)), [date.utc(2008, 11, 30, 16), date.utc(2008, 11, 30, 20), date.utc(2008, 11, 31, 0), date.utc(2008, 11, 31, 4), date.utc(2008, 11, 31, 8), date.utc(2008, 11, 31, 12)]);
  assert.deepStrictEqual(d3.utcHour.every(12).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 31, 13, 57)), [date.utc(2008, 11, 31, 0), date.utc(2008, 11, 31, 12)]);
});
