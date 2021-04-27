import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeSecond.floor(date) returns seconds", () => {
  assert.deepStrictEqual(d3.timeSecond.floor(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2010, 11, 31, 23, 59, 59));
  assert.deepStrictEqual(d3.timeSecond.floor(date.local(2011,  0,  1,  0,  0,  0,   0)), date.local(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.timeSecond.floor(date.local(2011,  0,  1,  0,  0,  0,   1)), date.local(2011,  0,  1,  0,  0,  0));
});

it("timeSecond.round(date) returns seconds", () => {
  assert.deepStrictEqual(d3.timeSecond.round(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.timeSecond.round(date.local(2011,  0,  1,  0,  0,  0, 499)), date.local(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.timeSecond.round(date.local(2011,  0,  1,  0,  0,  0, 500)), date.local(2011,  0,  1,  0,  0,  1));
});

it("timeSecond.ceil(date) returns seconds", () => {
  assert.deepStrictEqual(d3.timeSecond.ceil(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.timeSecond.ceil(date.local(2011,  0,  1,  0,  0,  0,   0)), date.local(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.timeSecond.ceil(date.local(2011,  0,  1,  0,  0,  0,   1)), date.local(2011,  0,  1,  0,  0,  1));
});

it("timeSecond.offset(date, step) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeSecond.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeSecond.offset(date, step) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011,  0,  1,  0,  0,  0, 999));
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 31, 23, 59, 57, 456));
});

it("timeSecond.offset(date, step) allows negative offsets", () => {
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59), -1), date.local(2010, 11, 31, 23, 59, 58));
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2011,  0,  1,  0,  0,  0), -2), date.local(2010, 11, 31, 23, 59, 58));
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2011,  0,  1,  0,  0,  0), -1), date.local(2010, 11, 31, 23, 59, 59));
});

it("timeSecond.offset(date, step) allows positive offsets", () => {
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 58), +1), date.local(2010, 11, 31, 23, 59, 59));
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 58), +2), date.local(2011,  0,  1,  0,  0,  0));
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59), +1), date.local(2011,  0,  1,  0,  0,  0));
});

it("timeSecond.offset(date, step) allows zero offset", () => {
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeSecond.range(start, stop) returns seconds", () => {
  assert.deepStrictEqual(d3.timeSecond.range(date.local(2010, 11, 31, 23, 59, 59), date.local(2011, 0, 1, 0, 0, 2)), [
    date.local(2010, 11, 31, 23, 59, 59),
    date.local(2011, 0, 1, 0, 0, 0),
    date.local(2011, 0, 1, 0, 0, 1)
  ]);
});

it("timeSecond.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.timeSecond.range(date.local(2010, 11, 31, 23, 59, 59), date.local(2011, 0, 1, 0, 0, 2))[0], date.local(2010, 11, 31, 23, 59, 59));
});

it("timeSecond.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.timeSecond.range(date.local(2010, 11, 31, 23, 59, 59), date.local(2011, 0, 1, 0, 0, 2))[2], date.local(2011, 0, 1, 0, 0, 1));
});

it("timeSecond.range(start, stop, step) can skip seconds", () => {
  assert.deepStrictEqual(d3.timeSecond.range(date.local(2011, 1, 1, 12, 0, 7), date.local(2011, 1, 1, 12, 1, 7), 15), [
    date.local(2011, 1, 1, 12, 0, 7),
    date.local(2011, 1, 1, 12, 0, 22),
    date.local(2011, 1, 1, 12, 0, 37),
    date.local(2011, 1, 1, 12, 0, 52)
  ]);
});

it("timeSecond.range(start, stop) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeSecond.range(date.utc(2011, 2, 13, 9, 59, 59), date.utc(2011, 2, 13, 10, 0, 2)), [
    date.utc(2011, 2, 13, 9, 59, 59),
    date.utc(2011, 2, 13, 10, 0, 0),
    date.utc(2011, 2, 13, 10, 0, 1)
  ]);
});

it("timeSecond.range(start, stop) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeSecond.range(date.utc(2011, 10, 6, 8, 59, 59), date.utc(2011, 10, 6, 9, 0, 2)), [
    date.utc(2011, 10, 6, 8, 59, 59),
    date.utc(2011, 10, 6, 9, 0, 0),
    date.utc(2011, 10, 6, 9, 0, 1)
  ]);
});

it("timeSecond.every(step) returns every stepth second, starting with the first second of the minute", () => {
  assert.deepStrictEqual(d3.timeSecond.every(15).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 15), date.local(2008, 11, 30, 12, 37, 30), date.local(2008, 11, 30, 12, 37, 45)]);
  assert.deepStrictEqual(d3.timeSecond.every(30).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 30)]);
});

it("timeSecond.range(start, stop) returns every second crossing the daylight savings boundary", () => {
  assert.deepStrictEqual(d3.timeSecond.range(new Date(1478422800000 - 2 * 1e3), new Date(1478422800000 + 2 * 1e3)), [
    new Date(1478422798000), // Sun Nov  6 2016  1:59:58 GMT-0700 (PDT)
    new Date(1478422799000), // Sun Nov  6 2016  1:59:59 GMT-0700 (PDT)
    new Date(1478422800000), // Sun Nov  6 2016  1:00:00 GMT-0800 (PDT)
    new Date(1478422801000)  // Sun Nov  6 2016  1:00:01 GMT-0800 (PDT)
  ]);
});
