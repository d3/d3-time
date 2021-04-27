import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeHour.floor(date) returns hours", () => {
  assert.deepStrictEqual(d3.timeHour.floor(date.local(2010, 11, 31, 23, 59)), date.local(2010, 11, 31, 23));
  assert.deepStrictEqual(d3.timeHour.floor(date.local(2011,  0,  1,  0,  0)), date.local(2011,  0,  1,  0));
  assert.deepStrictEqual(d3.timeHour.floor(date.local(2011,  0,  1,  0,  1)), date.local(2011,  0,  1,  0));
});

it("timeHour.floor(date) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011,  2, 13,  8, 59)), date.utc(2011,  2, 13,  8));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011,  2, 13,  9,  0)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011,  2, 13,  9,  1)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011,  2, 13,  9, 59)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011,  2, 13, 10,  0)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011,  2, 13, 10,  1)), date.utc(2011,  2, 13, 10));
});

it("timeHour.floor(date) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011, 10,  6,  7, 59)), date.utc(2011, 10,  6,  7));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011, 10,  6,  8,  0)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011, 10,  6,  8,  1)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011, 10,  6,  8, 59)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011, 10,  6,  9,  0)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.timeHour.floor(date.utc(2011, 10,  6,  9,  1)), date.utc(2011, 10,  6,  9));
});

it("timeHour.ceil(date) returns hours", () => {
  assert.deepStrictEqual(d3.timeHour.ceil(date.local(2010, 11, 31, 23, 59)), date.local(2011,  0,  1,  0));
  assert.deepStrictEqual(d3.timeHour.ceil(date.local(2011,  0,  1,  0,  0)), date.local(2011,  0,  1,  0));
  assert.deepStrictEqual(d3.timeHour.ceil(date.local(2011,  0,  1,  0,  1)), date.local(2011,  0,  1,  1));
});

it("timeHour.ceil(date) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011,  2, 13,  8, 59)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011,  2, 13,  9,  0)), date.utc(2011,  2, 13,  9));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011,  2, 13,  9,  1)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011,  2, 13,  9, 59)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011,  2, 13, 10,  0)), date.utc(2011,  2, 13, 10));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011,  2, 13, 10,  1)), date.utc(2011,  2, 13, 11));
});

it("timeHour.ceil(date) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011, 10,  6,  7, 59)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011, 10,  6,  8,  0)), date.utc(2011, 10,  6,  8));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011, 10,  6,  8,  1)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011, 10,  6,  8, 59)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011, 10,  6,  9,  0)), date.utc(2011, 10,  6,  9));
  assert.deepStrictEqual(d3.timeHour.ceil(date.utc(2011, 10,  6,  9,  1)), date.utc(2011, 10,  6, 10));
});

it("timeHour.offset(date) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeHour.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeHour.offset(date) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011,  0,  1,  0, 59, 59, 999));
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 31, 21, 59, 59, 456));
});

it("timeHour.offset(date) allows negative offsets", () => {
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 12), -1), date.local(2010, 11, 31, 11));
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2011,  0,  1,  1), -2), date.local(2010, 11, 31, 23));
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2011,  0,  1,  0), -1), date.local(2010, 11, 31, 23));
});

it("timeHour.offset(date) allows positive offsets", () => {
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 11), +1), date.local(2010, 11, 31, 12));
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 23), +2), date.local(2011,  0,  1,  1));
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 23), +1), date.local(2011,  0,  1,  0));
});

it("timeHour.offset(date) allows zero offset", () => {
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeHour.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeHour.range(start, stop) returns hours", () => {
  assert.deepStrictEqual(d3.timeHour.range(date.local(2010, 11, 31, 12, 30), date.local(2010, 11, 31, 15, 30)), [
    date.local(2010, 11, 31, 13),
    date.local(2010, 11, 31, 14),
    date.local(2010, 11, 31, 15)
  ]);
});

it("timeHour.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.timeHour.range(date.local(2010, 11, 31, 23), date.local(2011, 0, 1, 2))[0], date.local(2010, 11, 31, 23));
});

it("timeHour.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.timeHour.range(date.local(2010, 11, 31, 23), date.local(2011, 0, 1, 2))[2], date.local(2011, 0, 1, 1));
});

it("timeHour.range(start, stop) can skip hours", () => {
  assert.deepStrictEqual(d3.timeHour.range(date.local(2011, 1, 1, 1), date.local(2011, 1, 1, 13), 3), [
    date.local(2011, 1, 1, 1),
    date.local(2011, 1, 1, 4),
    date.local(2011, 1, 1, 7),
    date.local(2011, 1, 1, 10)
  ]);
});

it("timeHour.range(start, stop) observes start of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeHour.range(date.local(2011, 2, 13, 1), date.local(2011, 2, 13, 5)), [
    date.utc(2011, 2, 13, 9),
    date.utc(2011, 2, 13, 10),
    date.utc(2011, 2, 13, 11)
  ]);
});

it("timeHour.range(start, stop) observes end of daylight savings time", () => {
  assert.deepStrictEqual(d3.timeHour.range(date.local(2011, 10, 6, 0), date.local(2011, 10, 6, 2)), [
    date.utc(2011, 10, 6, 7),
    date.utc(2011, 10, 6, 8),
    date.utc(2011, 10, 6, 9)
  ]);
});

it("timeHour.every(step) returns every stepth hour, starting with the first hour of the day", () => {
  assert.deepStrictEqual(d3.timeHour.every(4).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 31, 13, 57)), [date.local(2008, 11, 30, 16), date.local(2008, 11, 30, 20), date.local(2008, 11, 31, 0), date.local(2008, 11, 31, 4), date.local(2008, 11, 31, 8), date.local(2008, 11, 31, 12)]);
  assert.deepStrictEqual(d3.timeHour.every(12).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 31, 13, 57)), [date.local(2008, 11, 31, 0), date.local(2008, 11, 31, 12)]);
});

it("timeHour.range(start, stop) returns every hour crossing the daylight savings boundary", () => {
  assert.deepStrictEqual(d3.timeHour.range(new Date(1478422800000 - 2 * 36e5), new Date(1478422800000 + 2 * 36e5)), [
    new Date(1478415600000), // Sun Nov  6 2016  0:00:00 GMT-0700 (PDT)
    new Date(1478419200000), // Sun Nov  6 2016  1:00:00 GMT-0700 (PDT)
    new Date(1478422800000), // Sun Nov  6 2016  1:00:00 GMT-0800 (PDT)
    new Date(1478426400000)  // Sun Nov  6 2016  2:00:00 GMT-0800 (PDT)
  ]);
});
