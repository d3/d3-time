import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeYear.floor(date) returns years", () => {
  assert.deepStrictEqual(d3.timeYear.floor(date.local(2010, 11, 31, 23, 59, 59)), date.local(2010,  0,  1));
  assert.deepStrictEqual(d3.timeYear.floor(date.local(2011,  0,  1,  0,  0,  0)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeYear.floor(date.local(2011,  0,  1,  0,  0,  1)), date.local(2011,  0,  1));
});

it("timeYear.floor(date) does not modify the specified date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59);
  assert.deepStrictEqual(d3.timeYear.floor(d), date.local(2010,  0,  1));
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59));
});

it("timeYear.floor(date) correctly handles years in the first century", () => {
  assert.deepStrictEqual(d3.timeYear.floor(date.local(9, 10,  6,  7)), date.local(9,  0,  1));
});

it("timeYear.ceil(date) returns years", () => {
  assert.deepStrictEqual(d3.timeYear.ceil(date.local(2010, 11, 31, 23, 59, 59)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeYear.ceil(date.local(2011,  0,  1,  0,  0,  0)), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeYear.ceil(date.local(2011,  0,  1,  0,  0,  1)), date.local(2012,  0,  1));
});

it("timeYear.offset(date, count) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeYear.offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeYear.offset(date, count) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2008, 11, 31, 23, 59, 59, 456));
});

it("timeYear.offset(date, count) allows negative offsets", () => {
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2010, 11,  1), -1), date.local(2009, 11,  1));
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2011,  0,  1), -2), date.local(2009,  0,  1));
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2011,  0,  1), -1), date.local(2010,  0,  1));
});

it("timeYear.offset(date, count) allows positive offsets", () => {
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2009, 11,  1), +1), date.local(2010, 11,  1));
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2009,  0,  1), +2), date.local(2011,  0,  1));
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2010,  0,  1), +1), date.local(2011,  0,  1));
});

it("timeYear.offset(date, count) allows zero offset", () => {
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeYear.offset(date.local(2010, 11, 31, 23, 59, 58,   0), 0), date.local(2010, 11, 31, 23, 59, 58,   0));
});

it("timeYear.every(step) returns every stepth year, starting with year zero", () => {
  assert.deepStrictEqual(d3.timeYear.every(5).range(date.local(2008), date.local(2023)), [date.local(2010), date.local(2015), date.local(2020)]);
});

it("timeYear.range(start, stop) returns years", () => {
  assert.deepStrictEqual(d3.timeYear.range(date.local(2010, 0, 1), date.local(2013, 0, 1)), [
    date.local(2010, 0, 1),
    date.local(2011, 0, 1),
    date.local(2012, 0, 1)
  ]);
});

it("timeYear.range(start, stop) has an inclusive lower bound", () => {
  assert.deepStrictEqual(d3.timeYear.range(date.local(2010, 0, 1), date.local(2013, 0, 1))[0], date.local(2010, 0, 1));
});

it("timeYear.range(start, stop) has an exclusive upper bound", () => {
  assert.deepStrictEqual(d3.timeYear.range(date.local(2010, 0, 1), date.local(2013, 0, 1))[2], date.local(2012, 0, 1));
});

it("timeYear.range(start, stop, step) can skip years", () => {
  assert.deepStrictEqual(d3.timeYear.range(date.local(2009, 0, 1), date.local(2029, 0, 1), 5), [
    date.local(2009, 0, 1),
    date.local(2014, 0, 1),
    date.local(2019, 0, 1),
    date.local(2024, 0, 1)
  ]);
});
