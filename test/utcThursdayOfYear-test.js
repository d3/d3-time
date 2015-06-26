var tape = require("tape"),
    time = require("../");

tape("utcThursdayOfYear(date) returns 0 for the first day of the year", function(test) {
  test.equal(time.utcThursdayOfYear(new Date(2000, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2001, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2002, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2003, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2004, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2005, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2006, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2007, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2008, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2009, 0, 1)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2010, 0, 1)), 0);
  test.end();
});

tape("utcThursdayOfYear(date) returns the expected week number", function(test) {
  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  test.equal(time.utcThursdayOfYear(new Date(2012, 00, 04)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2012, 00, 05)), 1);
  test.equal(time.utcThursdayOfYear(new Date(2012, 00, 06)), 1);
  test.equal(time.utcThursdayOfYear(new Date(2012, 00, 12)), 2);

  //     January 2015
  // Su Mo Tu We Th Fr Sa
  //              1  2  3
  //  4  5  6  7  8  9 10
  // 11 12 13 14 15 16 17
  // 18 19 20 21 22 23 24
  // 25 26 27 28 29 30 31
  test.equal(time.utcThursdayOfYear(new Date(2015, 00, 07)), 0);
  test.equal(time.utcThursdayOfYear(new Date(2015, 00, 08)), 1);
  test.equal(time.utcThursdayOfYear(new Date(2015, 00, 09)), 1);
  test.end();
});
