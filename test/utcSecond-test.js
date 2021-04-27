import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("utcSecond.floor(date) returns seconds", () => {
  assert.deepStrictEqual(d3.utcSecond.floor(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2010, 11, 31, 23, 59, 59));
  assert.deepStrictEqual(d3.utcSecond.floor(date.utc(2011,  0,  1,  0,  0,  0,   0)), date.utc(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.utcSecond.floor(date.utc(2011,  0,  1,  0,  0,  0,   1)), date.utc(2011,  0,  1,  0,  0,  0));
});

it("utcSecond.round(date) returns seconds", () => {
  assert.deepStrictEqual(d3.utcSecond.round(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.utcSecond.round(date.utc(2011,  0,  1,  0,  0,  0, 499)), date.utc(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.utcSecond.round(date.utc(2011,  0,  1,  0,  0,  0, 500)), date.utc(2011,  0,  1,  0,  0,  1));
});

it("utcSecond.ceil(date) returns seconds", () => {
  assert.deepStrictEqual(d3.utcSecond.ceil(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.utcSecond.ceil(date.utc(2011,  0,  1,  0,  0,  0,   0)), date.utc(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.utcSecond.ceil(date.utc(2011,  0,  1,  0,  0,  0,   1)), date.utc(2011,  0,  1,  0,  0,  1));
});

it("utcSecond.offset(date, step) does not modify the passed-in date", () => {
  const d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  d3.utcSecond.offset(d, +1);
  assert.deepStrictEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
});

it("utcSecond.offset(date, step) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011,  0,  1,  0,  0,  0, 999));
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 31, 23, 59, 57, 456));
});

it("utcSecond.offset(date, step) allows negative offsets", () => {
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59), -1), date.utc(2010, 11, 31, 23, 59, 58));
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2011,  0,  1,  0,  0,  0), -2), date.utc(2010, 11, 31, 23, 59, 58));
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2011,  0,  1,  0,  0,  0), -1), date.utc(2010, 11, 31, 23, 59, 59));
});

it("utcSecond.offset(date, step) allows positive offsets", () => {
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 58), +1), date.utc(2010, 11, 31, 23, 59, 59));
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 58), +2), date.utc(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59), +1), date.utc(2011,  0,  1,  0,  0,  0));
});

it("utcSecond.offset(date, step) allows zero offset", () => {
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 58,   0), 0), date.utc(2010, 11, 31, 23, 59, 58,   0));
});

it("utcSecond.range(start, stop) returns seconds", () => {
  assert.deepStrictEqual(d3.utcSecond.range(date.utc(2010, 11, 31, 23, 59, 59), date.utc(2011, 0, 1, 0, 0, 2)), [
    date.utc(2010, 11, 31, 23, 59, 59),
    date.utc(2011, 0, 1, 0, 0, 0),
    date.utc(2011, 0, 1, 0, 0, 1)
  ]);
});

it("utcSecond.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.utcSecond.range(date.utc(2010, 11, 31, 23, 59, 59), date.utc(2011, 0, 1, 0, 0, 2))[0], date.utc(2010, 11, 31, 23, 59, 59));
});

it("utcSecond.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.utcSecond.range(date.utc(2010, 11, 31, 23, 59, 59), date.utc(2011, 0, 1, 0, 0, 2))[2], date.utc(2011, 0, 1, 0, 0, 1));
});

it("utcSecond.range(start, stop, step) can skip seconds", () => {
  assert.deepStrictEqual(d3.utcSecond.range(date.utc(2011, 1, 1, 12, 0, 7), date.utc(2011, 1, 1, 12, 1, 7), 15), [
    date.utc(2011, 1, 1, 12, 0, 7),
    date.utc(2011, 1, 1, 12, 0, 22),
    date.utc(2011, 1, 1, 12, 0, 37),
    date.utc(2011, 1, 1, 12, 0, 52)
  ]);
});

it("utcSecond.range(start, stop) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcSecond.range(date.utc(2011, 2, 13, 9, 59, 59), date.utc(2011, 2, 13, 10, 0, 2)), [
    date.utc(2011, 2, 13, 9, 59, 59),
    date.utc(2011, 2, 13, 10, 0, 0),
    date.utc(2011, 2, 13, 10, 0, 1)
  ]);
});

it("utcSecond.range(start, stop) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.utcSecond.range(date.utc(2011, 10, 6, 8, 59, 59), date.utc(2011, 10, 6, 9, 0, 2)), [
    date.utc(2011, 10, 6, 8, 59, 59),
    date.utc(2011, 10, 6, 9, 0, 0),
    date.utc(2011, 10, 6, 9, 0, 1)
  ]);
});

it("utcSecond.every(step) returns every stepth second, starting with the first second of the minute", () => {
  assert.deepStrictEqual(d3.utcSecond.every(15).range(date.utc(2008, 11, 30, 12, 36, 47), date.utc(2008, 11, 30, 12, 37, 57)), [date.utc(2008, 11, 30, 12, 37, 0), date.utc(2008, 11, 30, 12, 37, 15), date.utc(2008, 11, 30, 12, 37, 30), date.utc(2008, 11, 30, 12, 37, 45)]);
  assert.deepStrictEqual(d3.utcSecond.every(30).range(date.utc(2008, 11, 30, 12, 36, 47), date.utc(2008, 11, 30, 12, 37, 57)), [date.utc(2008, 11, 30, 12, 37, 0), date.utc(2008, 11, 30, 12, 37, 30)]);
});
