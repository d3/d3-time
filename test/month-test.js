var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("months in an alias for month.range", function(test) {
  test.equal(time.months, time.month.range);
  test.end();
});

tape("month.floor(date) returns months", function(test) {
  test.deepEqual(time.month.floor(date.local(2010, 11, 31, 23)), date.local(2010, 11, 01));
  test.deepEqual(time.month.floor(date.local(2011, 00, 01, 00)), date.local(2011, 00, 01));
  test.deepEqual(time.month.floor(date.local(2011, 00, 01, 01)), date.local(2011, 00, 01));
  test.end();
});

tape("month.floor(date) observes daylight saving", function(test) {
  test.deepEqual(time.month.floor(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 01));
  test.deepEqual(time.month.floor(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 01));
  test.deepEqual(time.month.floor(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 01));
  test.deepEqual(time.month.floor(date.utc(2011, 02, 13, 10)), date.local(2011, 02, 01));
  test.deepEqual(time.month.floor(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 01));
  test.deepEqual(time.month.floor(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 01));
  test.deepEqual(time.month.floor(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 01));
  test.deepEqual(time.month.floor(date.utc(2011, 10, 06, 10)), date.local(2011, 10, 01));
  test.end();
});

tape("month.floor(date) handles years in the first century", function(test) {
  test.deepEqual(time.month.floor(date.local(0011, 10, 06, 07)), date.local(0011, 10, 01));
  test.end();
});

tape("month.round(date) returns months", function(test) {
  test.deepEqual(time.month.round(date.local(2010, 11, 16, 12)), date.local(2011, 00, 01));
  test.deepEqual(time.month.round(date.local(2010, 11, 16, 11)), date.local(2010, 11, 01));
  test.end();
});

tape("month.round(date) observes daylight saving", function(test) {
  test.deepEqual(time.month.round(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 01));
  test.deepEqual(time.month.round(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 01));
  test.deepEqual(time.month.round(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 01));
  test.deepEqual(time.month.round(date.utc(2011, 02, 13, 20)), date.local(2011, 02, 01));
  test.deepEqual(time.month.round(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 01));
  test.deepEqual(time.month.round(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 01));
  test.deepEqual(time.month.round(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 01));
  test.deepEqual(time.month.round(date.utc(2011, 10, 06, 20)), date.local(2011, 10, 01));
  test.end();
});

tape("month.round(date) handles midnight for leap years", function(test) {
  test.deepEqual(time.month.round(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.deepEqual(time.month.round(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.end();
});

tape("month.ceil(date) returns months", function(test) {
  test.deepEqual(time.month.ceil(date.local(2010, 10, 30, 23)), date.local(2010, 11, 01));
  test.deepEqual(time.month.ceil(date.local(2010, 11, 01, 01)), date.local(2011, 00, 01));
  test.end();
});

tape("month.ceil(date) observes daylight saving", function(test) {
  test.deepEqual(time.month.ceil(date.utc(2011, 02, 13, 07)), date.local(2011, 03, 01));
  test.deepEqual(time.month.ceil(date.utc(2011, 02, 13, 08)), date.local(2011, 03, 01));
  test.deepEqual(time.month.ceil(date.utc(2011, 02, 13, 09)), date.local(2011, 03, 01));
  test.deepEqual(time.month.ceil(date.utc(2011, 02, 13, 10)), date.local(2011, 03, 01));
  test.deepEqual(time.month.ceil(date.utc(2011, 10, 06, 07)), date.local(2011, 11, 01));
  test.deepEqual(time.month.ceil(date.utc(2011, 10, 06, 08)), date.local(2011, 11, 01));
  test.deepEqual(time.month.ceil(date.utc(2011, 10, 06, 09)), date.local(2011, 11, 01));
  test.deepEqual(time.month.ceil(date.utc(2011, 10, 06, 10)), date.local(2011, 11, 01));
  test.end();
});

tape("month.ceil(date) handles midnight for leap years", function(test) {
  test.deepEqual(time.month.ceil(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.deepEqual(time.month.ceil(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.end();
});

tape("month.offset(date) is an alias for month.offset(date, 1)", function(test) {
  test.deepEqual(time.month.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011, 00, 31, 23, 59, 59, 999));
  test.end();
});

tape("month.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.month.offset(date, +1);
  test.deepEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("month.offset(date, step) does not round the passed-in date", function(test) {
  test.deepEqual(time.month.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 00, 31, 23, 59, 59, 999));
  test.deepEqual(time.month.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 09, 31, 23, 59, 59, 456));
  test.end();
});

tape("month.offset(date, step) allows step to be negative", function(test) {
  test.deepEqual(time.month.offset(date.local(2010, 11, 31), -1), date.local(2010, 10, 31));
  test.deepEqual(time.month.offset(date.local(2011, 00, 01), -2), date.local(2010, 10, 01));
  test.deepEqual(time.month.offset(date.local(2011, 00, 01), -1), date.local(2010, 11, 01));
  test.end();
});

tape("month.offset(date, step) allows step to be positive", function(test) {
  test.deepEqual(time.month.offset(date.local(2010, 11, 31), +1), date.local(2011, 00, 31));
  test.deepEqual(time.month.offset(date.local(2010, 11, 30), +2), date.local(2011, 01, 30));
  test.deepEqual(time.month.offset(date.local(2010, 11, 30), +1), date.local(2011, 00, 30));
  test.end();
});

tape("month.offset(date, step) allows step to be zero", function(test) {
  test.deepEqual(time.month.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.month.offset(date.local(2010, 11, 31, 23, 59, 58, 000), 0), date.local(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("month.range(start, stop) returns months between start (inclusive) and stop (exclusive)", function(test) {
  test.deepEqual(time.month.range(date.local(2011, 11, 01), date.local(2012, 05, 01)), [
    date.local(2011, 11, 01),
    date.local(2012, 00, 01),
    date.local(2012, 01, 01),
    date.local(2012, 02, 01),
    date.local(2012, 03, 01),
    date.local(2012, 04, 01)
  ]);
  test.end();
});

tape("month.range(start, stop) returns months", function(test) {
  test.deepEqual(time.month.range(date.local(2011, 10, 04, 02), date.local(2012, 04, 10, 13)), [
    date.local(2011, 11, 01),
    date.local(2012, 00, 01),
    date.local(2012, 01, 01),
    date.local(2012, 02, 01),
    date.local(2012, 03, 01),
    date.local(2012, 04, 01)
  ]);
  test.end();
});

tape("month.range(start, stop) coerces start and stop to dates", function(test) {
  test.deepEqual(time.month.range(+date.local(2011, 10, 04), +date.local(2012, 01, 07)), [
    date.local(2011, 11, 01),
    date.local(2012, 00, 01),
    date.local(2012, 01, 01)
  ]);
  test.end();
});

tape("month.range(start, stop) returns the empty array for invalid dates", function(test) {
  test.deepEqual(time.month.range(new Date(NaN), Infinity), []);
  test.end();
});

tape("month.range(start, stop) returns the empty array if start >= stop", function(test) {
  test.deepEqual(time.month.range(date.local(2011, 11, 10), date.local(2011, 10, 04)), []);
  test.deepEqual(time.month.range(date.local(2011, 10, 01), date.local(2011, 10, 01)), []);
  test.end();
});

tape("month.count(start, end) counts months after start (exclusive) and before end (inclusive)", function(test) {
  test.equal(time.month.count(date.local(2011, 00, 01), date.local(2011, 04, 01)), 4);
  test.equal(time.month.count(date.local(2011, 00, 01), date.local(2011, 03, 30)), 3);
  test.equal(time.month.count(date.local(2010, 11, 31), date.local(2011, 03, 30)), 4);
  test.equal(time.month.count(date.local(2010, 11, 31), date.local(2011, 04, 01)), 5);
  test.equal(time.month.count(date.local(2009, 11, 31), date.local(2012, 04, 01)), 29);
  test.equal(time.month.count(date.local(2012, 04, 01), date.local(2009, 11, 31)), -29);
  test.end();
});

tape("month.every(step) returns every stepth month, starting with the first month of the year", function(test) {
  test.deepEqual(time.month.every(3).range(date.local(2008, 11, 3), date.local(2010, 6, 5)), [date.local(2009, 0, 1), date.local(2009, 3, 1), date.local(2009, 6, 1), date.local(2009, 9, 1), date.local(2010, 0, 1), date.local(2010, 3, 1), date.local(2010, 6, 1)]);
  test.end();
});
