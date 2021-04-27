import assert from "assert";
import * as date from "./date.js";
import * as d3 from "../src/index.js";

it("timeInterval() is equivalent to timeInterval.floor(new Date)", () => {
  const t = new Date;
  assert.deepStrictEqual(d3.timeYear(), d3.timeYear.floor(t));
});

it("timeInterval(date) is equivalent to timeInterval.floor(date)", () => {
  const t = new Date;
  assert.deepStrictEqual(d3.timeYear(t), d3.timeYear.floor(t));
});

it("timeInterval(floor, offset) returns a custom time interval", () => {
  const i = d3.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  });
  assert.deepStrictEqual(i(date.utc(2015, 0, 1, 12, 34, 56, 789)), date.utc(2015, 0, 1, 12));
});

it("timeInterval(floor, offset) does not define a count method", () => {
  const i = d3.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  });
  assert(!("count" in i));
});

it("timeInterval(floor, offset) floors the step before passing it to offset", () => {
  const steps = [], i = d3.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    steps.push(+step), date.setUTCHours(date.getUTCHours() + step);
  });
  assert.deepStrictEqual(i.offset(date.utc(2015, 0, 1, 12, 34, 56, 789), 1.5), date.utc(2015, 0, 1, 13, 34, 56, 789));
  assert.deepStrictEqual(i.range(date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 15), 1.5), [date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 13), date.utc(2015, 0, 1, 14)]);
  assert(steps.every(function(step) { return step === 1; }));
});

it("timeInterval(floor, offset, count) defines a count method", () => {
  const i = d3.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  }, function(start, end) {
    return (end - start) / 36e5;
  });
  assert.strictEqual(i.count(date.utc(2015, 0, 1, 12, 34), date.utc(2015, 0, 1, 15, 56)), 3);
});

it("timeInterval(floor, offset, count) floors dates before passing them to count", () => {
  const dates = [], i = d3.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  }, function(start, end) {
    return dates.push(new Date(+start), new Date(+end)), (end - start) / 36e5;
  });
  i.count(date.utc(2015, 0, 1, 12, 34), date.utc(2015, 0, 1, 15, 56));
  assert.deepStrictEqual(dates, [date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 15)]);
});

it("timeInterval.every(step) returns null if step is invalid", () => {
  assert.strictEqual(d3.timeDay.every(), null);
  assert.strictEqual(d3.timeMinute.every(null), null);
  assert.strictEqual(d3.timeSecond.every(undefined), null);
  assert.strictEqual(d3.timeDay.every(NaN), null);
  assert.strictEqual(d3.timeMinute.every(0), null);
  assert.strictEqual(d3.timeSecond.every(0.8), null);
  assert.strictEqual(d3.timeHour.every(-1), null);
});

it("timeInterval.every(step) returns interval if step is one", () => {
  assert.strictEqual(d3.timeDay.every("1"), d3.timeDay);
  assert.strictEqual(d3.timeMinute.every(1), d3.timeMinute);
  assert.strictEqual(d3.timeSecond.every(1.8), d3.timeSecond);
});

it("timeInterval.every(step).range(invalid, invalid) returns the empty array", () => {
  assert.deepStrictEqual(d3.timeMinute.every(15).range(NaN, NaN), []);
});

it("timeInterval.every(…).offset(date, step) returns the expected value when step is positive", () => {
  const i = d3.timeMinute.every(15);
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), 0), date.local(2015, 0, 1, 12, 34));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), 1), date.local(2015, 0, 1, 12, 45));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), 2), date.local(2015, 0, 1, 13,  0));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), 3), date.local(2015, 0, 1, 13, 15));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), 4), date.local(2015, 0, 1, 13, 30));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), 5), date.local(2015, 0, 1, 13, 45));
});

it("timeInterval.every(…).offset(date, step) returns the expected value when step is negative", () => {
  const i = d3.timeMinute.every(15);
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), -1), date.local(2015, 0, 1, 12, 30));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), -2), date.local(2015, 0, 1, 12, 15));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), -3), date.local(2015, 0, 1, 12,  0));
});

it("timeInterval.every(…).offset(date, step) returns the expected value when step is not an integer", () => {
  const i = d3.timeMinute.every(15);
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), 1.2), date.local(2015, 0, 1, 12, 45));
  assert.deepStrictEqual(i.offset(date.local(2015, 0, 1, 12, 34), -0.8), date.local(2015, 0, 1, 12, 30));
});
