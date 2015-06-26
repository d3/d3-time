var tape = require("tape"),
    time = require("../");

tape("tuesdayOfYear(date) returns 0 for the first day of the year", function(test) {
  test.equal(time.tuesdayOfYear(new Date(2000, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2001, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2002, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2003, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2004, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2005, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2006, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2007, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2008, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2009, 0, 1)), 0);
  test.equal(time.tuesdayOfYear(new Date(2010, 0, 1)), 0);
  test.end();
});

tape("tuesdayOfYear(date) returns the expected week number", function(test) {
  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  test.equal(time.tuesdayOfYear(new Date(2014, 00, 06)), 0);
  test.equal(time.tuesdayOfYear(new Date(2014, 00, 07)), 1);
  test.equal(time.tuesdayOfYear(new Date(2014, 00, 08)), 1);
  test.equal(time.tuesdayOfYear(new Date(2014, 00, 14)), 2);

  //     January 2013
  // Su Mo Tu We Th Fr Sa
  //        1  2  3  4  5
  //  6  7  8  9 10 11 12
  // 13 14 15 16 17 18 19
  // 20 21 22 23 24 25 26
  // 27 28 29 30 31
  test.equal(time.tuesdayOfYear(new Date(2013, 00, 07)), 0);
  test.equal(time.tuesdayOfYear(new Date(2013, 00, 08)), 1);
  test.equal(time.tuesdayOfYear(new Date(2013, 00, 09)), 1);
  test.end();
});
