var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcSundays in an alias for utcSunday.range", function(test) {
  test.equal(time.utcSundays, time.utcSunday.range);
  test.end();
});

tape("utcSunday.floor(date) returns sundays", function(test) {
  test.dateEqual(time.utcSunday.floor(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2010, 11, 26));
  test.dateEqual(time.utcSunday.floor(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2010, 11, 26));
  test.dateEqual(time.utcSunday.floor(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2010, 11, 26));
  test.dateEqual(time.utcSunday.floor(date.utc(2011, 00, 01, 23, 59, 59)), date.utc(2010, 11, 26));
  test.dateEqual(time.utcSunday.floor(date.utc(2011, 00, 02, 00, 00, 00)), date.utc(2011, 00, 02));
  test.dateEqual(time.utcSunday.floor(date.utc(2011, 00, 02, 00, 00, 01)), date.utc(2011, 00, 02));
  test.end();
});

tape("utcSunday.floor(date) observes daylight savings time", function(test) {
  test.dateEqual(time.utcSunday.floor(date.utc(2011, 02, 13, 01)), date.utc(2011, 02, 13));
  test.dateEqual(time.utcSunday.floor(date.utc(2011, 10, 06, 01)), date.utc(2011, 10, 06));
  test.end();
});

tape("utcSunday.floor(date) handles years in the first century", function(test) {
  test.dateEqual(time.utcSunday.floor(date.utc(0011, 10, 06, 07)), date.utc(0011, 10, 01));
  test.end();
});

tape("utcSunday.ceil(date) returns sundays", function(test) {
  test.dateEqual(time.utcSunday.ceil(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2011, 00, 02));
  test.dateEqual(time.utcSunday.ceil(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2011, 00, 02));
  test.dateEqual(time.utcSunday.ceil(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2011, 00, 02));
  test.dateEqual(time.utcSunday.ceil(date.utc(2011, 00, 01, 23, 59, 59)), date.utc(2011, 00, 02));
  test.dateEqual(time.utcSunday.ceil(date.utc(2011, 00, 02, 00, 00, 00)), date.utc(2011, 00, 02));
  test.dateEqual(time.utcSunday.ceil(date.utc(2011, 00, 02, 00, 00, 01)), date.utc(2011, 00, 09));
  test.end();
});

tape("utcSunday.ceil(date) observes daylight savings time", function(test) {
  test.dateEqual(time.utcSunday.ceil(date.utc(2011, 02, 13, 01)), date.utc(2011, 02, 20));
  test.dateEqual(time.utcSunday.ceil(date.utc(2011, 10, 06, 01)), date.utc(2011, 10, 13));
  test.end();
});

tape("utcSunday.offset(date) is an alias for utcSunday.offset(date, 1)", function(test) {
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011, 00, 07, 23, 59, 59, 999));
  test.end();
});

tape("utcSunday.offset(date, count) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcSunday.offset(d, +1);
  test.dateEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcSunday.offset(date, count) does not round the passed-in date", function(test) {
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 07, 23, 59, 59, 999));
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 17, 23, 59, 59, 456));
  test.end();
});

tape("utcSunday.offset(date, count) allows count to be negative", function(test) {
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 01), -1), date.utc(2010, 10, 24));
  test.dateEqual(time.utcSunday.offset(date.utc(2011, 00, 01), -2), date.utc(2010, 11, 18));
  test.dateEqual(time.utcSunday.offset(date.utc(2011, 00, 01), -1), date.utc(2010, 11, 25));
  test.end();
});

tape("utcSunday.offset(date, count) allows count to be positive", function(test) {
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 10, 24), +1), date.utc(2010, 11, 01));
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 18), +2), date.utc(2011, 00, 01));
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 25), +1), date.utc(2011, 00, 01));
  test.end();
});

tape("utcSunday.offset(date, count) allows count to be zero", function(test) {
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.dateEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcSunday.range(start, stop) returns sundays between start (inclusive) and stop (exclusive)", function(test) {
  var days = time.utcSunday.range(date.utc(2011, 11, 01), date.utc(2012, 00, 15));
  test.equal(days.length, 6);
  test.dateEqual(days[0], date.utc(2011, 11, 04));
  test.dateEqual(days[1], date.utc(2011, 11, 11));
  test.dateEqual(days[2], date.utc(2011, 11, 18));
  test.dateEqual(days[3], date.utc(2011, 11, 25));
  test.dateEqual(days[4], date.utc(2012, 00, 01));
  test.dateEqual(days[5], date.utc(2012, 00, 08));
  test.end();
});

tape("utcSunday.range(start, stop) returns sundays", function(test) {
  var days = time.utcSunday.range(date.utc(2011, 11, 01, 12, 23), date.utc(2012, 00, 14, 12, 23));
  test.equal(days.length, 6);
  test.dateEqual(days[0], date.utc(2011, 11, 04));
  test.dateEqual(days[1], date.utc(2011, 11, 11));
  test.dateEqual(days[2], date.utc(2011, 11, 18));
  test.dateEqual(days[3], date.utc(2011, 11, 25));
  test.dateEqual(days[4], date.utc(2012, 00, 01));
  test.dateEqual(days[5], date.utc(2012, 00, 08));
  test.end();
});

tape("utcSunday.range(start, stop) coerces start and stop to dates", function(test) {
  var days = time.utcSunday.range(+date.utc(2011, 11, 01), +date.utc(2012, 00, 15));
  test.equal(days.length, 6);
  test.dateEqual(days[0], date.utc(2011, 11, 04));
  test.dateEqual(days[1], date.utc(2011, 11, 11));
  test.dateEqual(days[2], date.utc(2011, 11, 18));
  test.dateEqual(days[3], date.utc(2011, 11, 25));
  test.dateEqual(days[4], date.utc(2012, 00, 01));
  test.dateEqual(days[5], date.utc(2012, 00, 08));
  test.end();
});

tape("utcSunday.range(start, stop) returns the empty array for invalid dates", function(test) {
  test.deepEqual(time.utcSunday.range(new Date(NaN), Infinity), []);
  test.end();
});

tape("utcSunday.range(start, stop) returns the empty array if start >= stop", function(test) {
  test.deepEqual(time.utcSunday.range(date.utc(2011, 11, 10), date.utc(2011, 10, 04)), []);
  test.deepEqual(time.utcSunday.range(date.utc(2011, 10, 01), date.utc(2011, 10, 01)), []);
  test.end();
});

tape("utcSunday.range(start, stop, step) returns every step sunday", function(test) {
  var days = time.utcSunday.range(date.utc(2011, 11, 01), date.utc(2012, 00, 15), 2);
  test.equal(days.length, 3);
  test.dateEqual(days[0], date.utc(2011, 11, 04));
  test.dateEqual(days[1], date.utc(2011, 11, 18));
  test.dateEqual(days[2], date.utc(2012, 00, 01));
  test.end();
});
