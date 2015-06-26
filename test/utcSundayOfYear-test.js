var tape = require("tape"),
    time = require("../");

tape("utcSundayOfYear(date) returns 0 for the first day of the year", function(test) {
  test.equal(time.utcSundayOfYear(new Date(2000, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2001, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2002, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2003, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2004, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2005, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2006, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2007, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2008, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2009, 00, 01)), 0);
  test.equal(time.utcSundayOfYear(new Date(2010, 00, 01)), 0);
  test.end();
});

tape("utcSundayOfYear(date) returns the expected week number", function(test) {
  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  test.equal(time.utcSundayOfYear(new Date(2014, 00, 04)), 0);
  test.equal(time.utcSundayOfYear(new Date(2014, 00, 05)), 1);
  test.equal(time.utcSundayOfYear(new Date(2014, 00, 06)), 1);
  test.equal(time.utcSundayOfYear(new Date(2014, 00, 12)), 2);

  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  test.equal(time.utcSundayOfYear(new Date(2012, 00, 07)), 0);
  test.equal(time.utcSundayOfYear(new Date(2012, 00, 08)), 1);
  test.equal(time.utcSundayOfYear(new Date(2012, 00, 09)), 1);
  test.end();
});
