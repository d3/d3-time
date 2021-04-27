import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeYear.every(n).floor(date) returns integer multiples of n years", () => {
  assert.deepStrictEqual(d3.timeYear.every(10).floor(date.local(2009, 11, 31, 23, 59, 59)), date.local(2000,  0,  1));
  assert.deepStrictEqual(d3.timeYear.every(10).floor(date.local(2010,  0,  1,  0,  0,  0)), date.local(2010,  0,  1));
  assert.deepStrictEqual(d3.timeYear.every(10).floor(date.local(2010,  0,  1,  0,  0,  1)), date.local(2010,  0,  1));
});

it("timeYear.every(n).ceil(date) returns integer multiples of n years", () => {
  assert.deepStrictEqual(d3.timeYear.every(100).ceil(date.local(1999, 11, 31, 23, 59, 59)), date.local(2000,  0,  1));
  assert.deepStrictEqual(d3.timeYear.every(100).ceil(date.local(2000,  0,  1,  0,  0,  0)), date.local(2000,  0,  1));
  assert.deepStrictEqual(d3.timeYear.every(100).ceil(date.local(2000,  0,  1,  0,  0,  1)), date.local(2100,  0,  1));
});

it("timeYear.every(n).offset(date, count) does not modify the passed-in date", () => {
  const d = date.local(2010, 11, 31, 23, 59, 59, 999);
  d3.timeYear.every(5).offset(d, +1);
  assert.deepStrictEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
});

it("timeYear.every(n).offset(date, count) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.timeYear.every(5).offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2015, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.timeYear.every(5).offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2000, 11, 31, 23, 59, 59, 456));
});

it("timeYear.every(n) does not define interval.count or interval.every", () => {
  const decade = d3.timeYear.every(10);
  assert.strictEqual(decade.count, undefined);
  assert.strictEqual(decade.every, undefined);
});

it("timeYear.every(n).range(start, stop) returns multiples of n years", () => {
  assert.deepStrictEqual(d3.timeYear.every(10).range(date.local(2010, 0, 1), date.local(2031, 0, 1)), [
    date.local(2010, 0, 1),
    date.local(2020, 0, 1),
    date.local(2030, 0, 1)
  ]);
});
