import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("utcYear.every(n).floor(date) returns integer multiples of n years", () => {
  assert.deepStrictEqual(d3.utcYear.every(10).floor(date.utc(2009, 11, 31, 23, 59, 59)), date.utc(2000,  0,  1));
  assert.deepStrictEqual(d3.utcYear.every(10).floor(date.utc(2010,  0,  1,  0,  0,  0)), date.utc(2010,  0,  1));
  assert.deepStrictEqual(d3.utcYear.every(10).floor(date.utc(2010,  0,  1,  0,  0,  1)), date.utc(2010,  0,  1));
});

it("utcYear.every(n).ceil(date) returns integer multiples of n years", () => {
  assert.deepStrictEqual(d3.utcYear.every(100).ceil(date.utc(1999, 11, 31, 23, 59, 59)), date.utc(2000,  0,  1));
  assert.deepStrictEqual(d3.utcYear.every(100).ceil(date.utc(2000,  0,  1,  0,  0,  0)), date.utc(2000,  0,  1));
  assert.deepStrictEqual(d3.utcYear.every(100).ceil(date.utc(2000,  0,  1,  0,  0,  1)), date.utc(2100,  0,  1));
});

it("utcYear.every(n).offset(date, count) does not modify the passed-in date", () => {
  const d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  d3.utcYear.every(5).offset(d, +1);
  assert.deepStrictEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
});

it("utcYear.every(n).offset(date, count) does not round the passed-in-date", () => {
  assert.deepStrictEqual(d3.utcYear.every(5).offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2015, 11, 31, 23, 59, 59, 999));
  assert.deepStrictEqual(d3.utcYear.every(5).offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2000, 11, 31, 23, 59, 59, 456));
});

it("utcYear.every(n) does not define interval.count or interval.every", () => {
  const decade = d3.utcYear.every(10);
  assert.strictEqual(decade.count, undefined);
  assert.strictEqual(decade.every, undefined);
});

it("utcYear.every(n).range(start, stop) returns multiples of n years", () => {
  assert.deepStrictEqual(d3.utcYear.every(10).range(date.utc(2010, 0, 1), date.utc(2031, 0, 1)), [
    date.utc(2010, 0, 1),
    date.utc(2020, 0, 1),
    date.utc(2030, 0, 1)
  ]);
});
