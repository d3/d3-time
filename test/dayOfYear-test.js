var tape = require("tape"),
    time = require("../");

tape("dayOfYear(date) returns the day-of-year number of the specified date", function(test) {
  test.equal(time.dayOfYear(new Date(2011, 4, 9)), 128);
  test.end();
});

tape("dayOfYear(date) observes daylight savings time", function(test) {
  test.equal(time.dayOfYear(new Date(2011, 02, 13, 01)), 71);
  test.equal(time.dayOfYear(new Date(2011, 02, 13, 03)), 71);
  test.equal(time.dayOfYear(new Date(2011, 02, 13, 04)), 71);
  test.equal(time.dayOfYear(new Date(2011, 10, 06, 00)), 309);
  test.equal(time.dayOfYear(new Date(2011, 10, 06, 01)), 309);
  test.equal(time.dayOfYear(new Date(2011, 10, 06, 02)), 309);
  test.end();
});

tape("dayOfYear(date) returns zero for the first day of the year", function(test) {
  test.equal(time.dayOfYear(new Date(2000, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2001, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2002, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2003, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2004, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2005, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2006, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2007, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2008, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2009, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2010, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2011, 0, 1)), 0);
  test.equal(time.dayOfYear(new Date(2012, 0, 1)), 0);
  test.end();
});

tape("dayOfYear(date) returns 364 or 365 for the last day of the year", function(test) {
  test.equal(time.dayOfYear(new Date(1999, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2000, 11, 31)), 365); // leap year
  test.equal(time.dayOfYear(new Date(2001, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2002, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2003, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2004, 11, 31)), 365); // leap year
  test.equal(time.dayOfYear(new Date(2005, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2006, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2007, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2008, 11, 31)), 365); // leap year
  test.equal(time.dayOfYear(new Date(2009, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2010, 11, 31)), 364);
  test.equal(time.dayOfYear(new Date(2011, 11, 31)), 364);
  test.end();
});
