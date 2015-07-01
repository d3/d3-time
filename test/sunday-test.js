var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("sundays in an alias for sunday.range", function(test) {
  test.equal(time.sundays, time.sunday.range);
  test.end();
});

tape("sunday.floor(date) returns Sundays", function(test) {
  test.deepEqual(time.sunday.floor(date.local(2010, 11, 31, 23, 59, 59)), date.local(2010, 11, 26));
  test.deepEqual(time.sunday.floor(date.local(2011, 00, 01, 00, 00, 00)), date.local(2010, 11, 26));
  test.deepEqual(time.sunday.floor(date.local(2011, 00, 01, 00, 00, 01)), date.local(2010, 11, 26));
  test.deepEqual(time.sunday.floor(date.local(2011, 00, 01, 23, 59, 59)), date.local(2010, 11, 26));
  test.deepEqual(time.sunday.floor(date.local(2011, 00, 02, 00, 00, 00)), date.local(2011, 00, 02));
  test.deepEqual(time.sunday.floor(date.local(2011, 00, 02, 00, 00, 01)), date.local(2011, 00, 02));
  test.end();
});

tape("sunday.floor(date) observes daylight saving", function(test) {
  test.deepEqual(time.sunday.floor(date.local(2011, 02, 13, 01)), date.local(2011, 02, 13));
  test.deepEqual(time.sunday.floor(date.local(2011, 10, 06, 01)), date.local(2011, 10, 06));
  test.end();
});

tape("sunday.floor(date) handles years in the first century", function(test) {
  test.deepEqual(time.sunday.floor(date.local(0011, 10, 06, 07)), date.local(0011, 10, 01));
  test.end();
});

tape("sunday.ceil(date) returns Sundays", function(test) {
  test.deepEqual(time.sunday.ceil(date.local(2010, 11, 31, 23, 59, 59)), date.local(2011, 00, 02));
  test.deepEqual(time.sunday.ceil(date.local(2011, 00, 01, 00, 00, 00)), date.local(2011, 00, 02));
  test.deepEqual(time.sunday.ceil(date.local(2011, 00, 01, 00, 00, 01)), date.local(2011, 00, 02));
  test.deepEqual(time.sunday.ceil(date.local(2011, 00, 01, 23, 59, 59)), date.local(2011, 00, 02));
  test.deepEqual(time.sunday.ceil(date.local(2011, 00, 02, 00, 00, 00)), date.local(2011, 00, 02));
  test.deepEqual(time.sunday.ceil(date.local(2011, 00, 02, 00, 00, 01)), date.local(2011, 00, 09));
  test.end();
});

tape("sunday.ceil(date) observes daylight saving", function(test) {
  test.deepEqual(time.sunday.ceil(date.local(2011, 02, 13, 01)), date.local(2011, 02, 20));
  test.deepEqual(time.sunday.ceil(date.local(2011, 10, 06, 01)), date.local(2011, 10, 13));
  test.end();
});

tape("sunday.offset(date) is an alias for sunday.offset(date, 1)", function(test) {
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011, 00, 07, 23, 59, 59, 999));
  test.end();
});

tape("sunday.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.sunday.offset(d, +1);
  test.deepEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("sunday.offset(date, step) does not round the passed-in date", function(test) {
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 00, 07, 23, 59, 59, 999));
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 17, 23, 59, 59, 456));
  test.end();
});

tape("sunday.offset(date, step) allows step to be negative", function(test) {
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 01), -1), date.local(2010, 10, 24));
  test.deepEqual(time.sunday.offset(date.local(2011, 00, 01), -2), date.local(2010, 11, 18));
  test.deepEqual(time.sunday.offset(date.local(2011, 00, 01), -1), date.local(2010, 11, 25));
  test.end();
});

tape("sunday.offset(date, step) allows step to be positive", function(test) {
  test.deepEqual(time.sunday.offset(date.local(2010, 10, 24), +1), date.local(2010, 11, 01));
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 18), +2), date.local(2011, 00, 01));
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 25), +1), date.local(2011, 00, 01));
  test.end();
});

tape("sunday.offset(date, step) allows step to be zero", function(test) {
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 58, 000), 0), date.local(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("sunday.range(start, stop) returns Sundays between start (inclusive) and stop (exclusive)", function(test) {
  var days = time.sunday.range(date.local(2011, 11, 01), date.local(2012, 00, 15));
  test.equal(days.length, 6);
  test.deepEqual(days[0], date.local(2011, 11, 04));
  test.deepEqual(days[1], date.local(2011, 11, 11));
  test.deepEqual(days[2], date.local(2011, 11, 18));
  test.deepEqual(days[3], date.local(2011, 11, 25));
  test.deepEqual(days[4], date.local(2012, 00, 01));
  test.deepEqual(days[5], date.local(2012, 00, 08));
  test.end();
});

tape("sunday.range(start, stop) returns Sundays", function(test) {
  var days = time.sunday.range(date.local(2011, 11, 01, 12, 23), date.local(2012, 00, 14, 12, 23));
  test.equal(days.length, 6);
  test.deepEqual(days[0], date.local(2011, 11, 04));
  test.deepEqual(days[1], date.local(2011, 11, 11));
  test.deepEqual(days[2], date.local(2011, 11, 18));
  test.deepEqual(days[3], date.local(2011, 11, 25));
  test.deepEqual(days[4], date.local(2012, 00, 01));
  test.deepEqual(days[5], date.local(2012, 00, 08));
  test.end();
});

tape("sunday.range(start, stop) coerces start and stop to dates", function(test) {
  var days = time.sunday.range(+date.local(2011, 11, 01), +date.local(2012, 00, 15));
  test.equal(days.length, 6);
  test.deepEqual(days[0], date.local(2011, 11, 04));
  test.deepEqual(days[1], date.local(2011, 11, 11));
  test.deepEqual(days[2], date.local(2011, 11, 18));
  test.deepEqual(days[3], date.local(2011, 11, 25));
  test.deepEqual(days[4], date.local(2012, 00, 01));
  test.deepEqual(days[5], date.local(2012, 00, 08));
  test.end();
});

tape("sunday.range(start, stop) returns the empty array for invalid dates", function(test) {
  test.deepEqual(time.sunday.range(new Date(NaN), Infinity), []);
  test.end();
});

tape("sunday.range(start, stop) returns the empty array if start >= stop", function(test) {
  test.deepEqual(time.sunday.range(date.local(2011, 11, 10), date.local(2011, 10, 04)), []);
  test.deepEqual(time.sunday.range(date.local(2011, 10, 01), date.local(2011, 10, 01)), []);
  test.end();
});

tape("sunday.range(start, stop, step) returns every step Sunday", function(test) {
  var days = time.sunday.range(date.local(2011, 11, 01), date.local(2012, 00, 15), 2);
  test.equal(days.length, 3);
  test.deepEqual(days[0], date.local(2011, 11, 04));
  test.deepEqual(days[1], date.local(2011, 11, 18));
  test.deepEqual(days[2], date.local(2012, 00, 01));
  test.end();
});

tape("sunday.count(start, end) counts Sundays after start (exclusive) and before end (inclusive)", function(test) {
  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  test.equal(time.sunday.count(date.local(2014, 00, 01), date.local(2014, 00, 04)), 0);
  test.equal(time.sunday.count(date.local(2014, 00, 01), date.local(2014, 00, 05)), 1);
  test.equal(time.sunday.count(date.local(2014, 00, 01), date.local(2014, 00, 06)), 1);
  test.equal(time.sunday.count(date.local(2014, 00, 01), date.local(2014, 00, 12)), 2);

  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  test.equal(time.sunday.count(date.local(2012, 00, 01), date.local(2012, 00, 07)), 0);
  test.equal(time.sunday.count(date.local(2012, 00, 01), date.local(2012, 00, 08)), 1);
  test.equal(time.sunday.count(date.local(2012, 00, 01), date.local(2012, 00, 09)), 1);
  test.end();
});

tape("sunday.count(start, end) observes daylight saving", function(test) {
  test.equal(time.sunday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 01)), 11);
  test.equal(time.sunday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 03)), 11);
  test.equal(time.sunday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 04)), 11);
  test.equal(time.sunday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 00)), 45);
  test.equal(time.sunday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 01)), 45);
  test.equal(time.sunday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 02)), 45);
  test.end();
});
