var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("days in an alias for day.range", function(test) {
  test.equal(time.days, time.day.range);
  test.end();
});

tape("day is an alias for day.floor", function(test) {
  test.equal(time.day, time.day.floor);
  test.end();
});

tape("day.floor(date) returns days", function(test) {
  test.dateEqual(time.day.floor(date.local(2010, 11, 31, 23)), date.local(2010, 11, 31));
  test.dateEqual(time.day.floor(date.local(2011, 00, 01, 00)), date.local(2011, 00, 01));
  test.dateEqual(time.day.floor(date.local(2011, 00, 01, 01)), date.local(2011, 00, 01));
  test.end();
});

tape("day.floor(date) observes Daylight Savings Time", function(test) {
  test.dateEqual(time.day.floor(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 12));
  test.dateEqual(time.day.floor(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 13));
  test.dateEqual(time.day.floor(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 13));
  test.dateEqual(time.day.floor(date.utc(2011, 02, 13, 10)), date.local(2011, 02, 13));
  test.dateEqual(time.day.floor(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 06));
  test.dateEqual(time.day.floor(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 06));
  test.dateEqual(time.day.floor(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 06));
  test.dateEqual(time.day.floor(date.utc(2011, 10, 06, 10)), date.local(2011, 10, 06));
  test.end();
});

tape("day.floor(date) handles years in the first century", function(test) {
  test.dateEqual(time.day.floor(date.local(0011, 10, 06, 07)), date.local(0011, 10, 06));
  test.end();
});

tape("day.round(date) returns days", function(test) {
  test.dateEqual(time.day.round(date.local(2010, 11, 30, 13)), date.local(2010, 11, 31));
  test.dateEqual(time.day.round(date.local(2010, 11, 30, 11)), date.local(2010, 11, 30));
  test.end();
});

tape("day.round(date) observes Daylight Savings Time", function(test) {
  test.dateEqual(time.day.round(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 13));
  test.dateEqual(time.day.round(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 13));
  test.dateEqual(time.day.round(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 13));
  test.dateEqual(time.day.round(date.utc(2011, 02, 13, 20)), date.local(2011, 02, 14));
  test.dateEqual(time.day.round(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 06));
  test.dateEqual(time.day.round(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 06));
  test.dateEqual(time.day.round(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 06));
  test.dateEqual(time.day.round(date.utc(2011, 10, 06, 20)), date.local(2011, 10, 07));
  test.end();
});

tape("day.round(date) handles midnight in leap years", function(test) {
  test.dateEqual(time.day.round(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.dateEqual(time.day.round(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.end();
});

tape("day.ceil(date) returns days", function(test) {
  test.dateEqual(time.day.ceil(date.local(2010, 11, 30, 23)), date.local(2010, 11, 31));
  test.dateEqual(time.day.ceil(date.local(2010, 11, 31, 00)), date.local(2010, 11, 31));
  test.dateEqual(time.day.ceil(date.local(2010, 11, 31, 01)), date.local(2011, 00, 01));
  test.end();
});

tape("day.ceil(date) observes start of Daylight Savings Time", function(test) {
  test.dateEqual(time.day.ceil(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 13));
  test.dateEqual(time.day.ceil(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 13));
  test.dateEqual(time.day.ceil(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 14));
  test.dateEqual(time.day.ceil(date.utc(2011, 02, 13, 10)), date.local(2011, 02, 14));
  test.end();
});

tape("day.ceil(date) observes end of Daylight Savings Time", function(test) {
  test.dateEqual(time.day.ceil(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 06));
  test.dateEqual(time.day.ceil(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 07));
  test.dateEqual(time.day.ceil(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 07));
  test.dateEqual(time.day.ceil(date.utc(2011, 10, 06, 10)), date.local(2011, 10, 07));
  test.end();
});

tape("day.ceil(date) handles midnight for leap years", function(test) {
  test.dateEqual(time.day.ceil(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.dateEqual(time.day.ceil(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.end();
});

tape("day.offset(date) is an alias for day.offset(date, 1)", function(test) {
  test.dateEqual(time.day.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011, 00, 01, 23, 59, 59, 999));
  test.end();
});

tape("day.offset(date, count) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.day.offset(date, +1);
  test.dateEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("day.offset(date, count) does not round the passed-in date", function(test) {
  test.dateEqual(time.day.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 00, 01, 23, 59, 59, 999));
  test.dateEqual(time.day.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 29, 23, 59, 59, 456));
  test.end();
});

tape("day.offset(date, count) allows count to be negative", function(test) {
  test.dateEqual(time.day.offset(date.local(2010, 11, 31), -1), date.local(2010, 11, 30));
  test.dateEqual(time.day.offset(date.local(2011, 00, 01), -2), date.local(2010, 11, 30));
  test.dateEqual(time.day.offset(date.local(2011, 00, 01), -1), date.local(2010, 11, 31));
  test.end();
});

tape("day.offset(date, count) allows count to be positive", function(test) {
  test.dateEqual(time.day.offset(date.local(2010, 11, 31), +1), date.local(2011, 00, 01));
  test.dateEqual(time.day.offset(date.local(2010, 11, 30), +2), date.local(2011, 00, 01));
  test.dateEqual(time.day.offset(date.local(2010, 11, 30), +1), date.local(2010, 11, 31));
  test.end();
});

tape("day.offset(date, count) allows count to be zero", function(test) {
  test.dateEqual(time.day.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  test.dateEqual(time.day.offset(date.local(2010, 11, 31, 23, 59, 58, 000), 0), date.local(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("day.range(start, stop) returns days between start (inclusive) and stop (exclusive)", function(test) {
  var days = time.day.range(date.local(2011, 10, 04), date.local(2011, 10, 10));
  test.equal(days.length, 6);
  test.dateEqual(days[0], date.local(2011, 10, 04));
  test.dateEqual(days[1], date.local(2011, 10, 05));
  test.dateEqual(days[2], date.local(2011, 10, 06));
  test.dateEqual(days[3], date.local(2011, 10, 07));
  test.dateEqual(days[4], date.local(2011, 10, 08));
  test.dateEqual(days[5], date.local(2011, 10, 09));
  test.end();
});

tape("day.range(start, stop) returns days", function(test) {
  var days = time.day.range(date.local(2011, 10, 04, 02), date.local(2011, 10, 10, 13));
  test.equal(days.length, 6);
  test.dateEqual(days[0], date.local(2011, 10, 05));
  test.dateEqual(days[1], date.local(2011, 10, 06));
  test.dateEqual(days[2], date.local(2011, 10, 07));
  test.dateEqual(days[3], date.local(2011, 10, 08));
  test.dateEqual(days[4], date.local(2011, 10, 09));
  test.dateEqual(days[5], date.local(2011, 10, 10));
  test.end();
});

tape("day.range(start, stop) coerces start and stop to dates", function(test) {
  var days = time.day.range(+date.local(2011, 10, 04), +date.local(2011, 10, 07));
  test.equal(days.length, 3);
  test.dateEqual(days[0], date.local(2011, 10, 04));
  test.dateEqual(days[1], date.local(2011, 10, 05));
  test.dateEqual(days[2], date.local(2011, 10, 06));
  test.end();
});

tape("day.range(start, stop) returns the empty array for invalid dates", function(test) {
  test.deepEqual(time.day.range(new Date(NaN), Infinity), []);
  test.end();
});

tape("day.range(start, stop) returns the empty array if start >= stop", function(test) {
  test.deepEqual(time.day.range(date.local(2011, 10, 10), date.local(2011, 10, 04)), []);
  test.deepEqual(time.day.range(date.local(2011, 10, 10), date.local(2011, 10, 10)), []);
  test.end();
});

tape("day.range(start, stop, step) returns every step day", function(test) {
  var days = time.day.range(date.local(2011, 10, 04, 02), date.local(2011, 10, 14, 13), 3);
  test.equal(days.length, 4);
  test.dateEqual(days[0], date.local(2011, 10, 05));
  test.dateEqual(days[1], date.local(2011, 10, 08));
  test.dateEqual(days[2], date.local(2011, 10, 11));
  test.dateEqual(days[3], date.local(2011, 10, 14));
  test.end();
});

tape("day.count(start, end) counts days after start (exclusive) and before end (inclusive)", function(test) {
  test.equal(time.day.count(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 00)), 128);
  test.equal(time.day.count(date.local(2011, 00, 01, 01), date.local(2011, 04, 09, 00)), 128);
  test.equal(time.day.count(date.local(2010, 11, 31, 23), date.local(2011, 04, 09, 00)), 129);
  test.equal(time.day.count(date.local(2011, 00, 01, 00), date.local(2011, 04, 08, 23)), 127);
  test.equal(time.day.count(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 01)), 128);
  test.end();
});

tape("day.count(start, end) observes Daylight Savings Time", function(test) {
  test.equal(time.day.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 01)), 71);
  test.equal(time.day.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 03)), 71);
  test.equal(time.day.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 04)), 71);
  test.equal(time.day.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 00)), 309);
  test.equal(time.day.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 01)), 309);
  test.equal(time.day.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 02)), 309);
  test.end();
});

tape("day.count(start, end) returns 364 or 365 for a full year", function(test) {
  test.equal(time.day.count(date.local(1999, 00, 01), date.local(1999, 11, 31)), 364);
  test.equal(time.day.count(date.local(2000, 00, 01), date.local(2000, 11, 31)), 365); // leap year
  test.equal(time.day.count(date.local(2001, 00, 01), date.local(2001, 11, 31)), 364);
  test.equal(time.day.count(date.local(2002, 00, 01), date.local(2002, 11, 31)), 364);
  test.equal(time.day.count(date.local(2003, 00, 01), date.local(2003, 11, 31)), 364);
  test.equal(time.day.count(date.local(2004, 00, 01), date.local(2004, 11, 31)), 365); // leap year
  test.equal(time.day.count(date.local(2005, 00, 01), date.local(2005, 11, 31)), 364);
  test.equal(time.day.count(date.local(2006, 00, 01), date.local(2006, 11, 31)), 364);
  test.equal(time.day.count(date.local(2007, 00, 01), date.local(2007, 11, 31)), 364);
  test.equal(time.day.count(date.local(2008, 00, 01), date.local(2008, 11, 31)), 365); // leap year
  test.equal(time.day.count(date.local(2009, 00, 01), date.local(2009, 11, 31)), 364);
  test.equal(time.day.count(date.local(2010, 00, 01), date.local(2010, 11, 31)), 364);
  test.equal(time.day.count(date.local(2011, 00, 01), date.local(2011, 11, 31)), 364);
  test.end();
});
