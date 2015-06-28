var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("mondays in an alias for monday.range", function(test) {
  test.equal(time.mondays, time.monday.range);
  test.end();
});

tape("monday.floor(date) returns Mondays", function(test) {
  test.dateEqual(time.monday.floor(date.local(2011, 00, 01, 23, 59, 59)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 00, 00, 00)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 00, 00, 01)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 23, 59, 59)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 03, 00, 00, 00)), date.local(2011, 00, 03));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 03, 00, 00, 01)), date.local(2011, 00, 03));
  test.end();
});

tape("monday.range(start, stop, step) returns every step Monday", function(test) {
  var days = time.monday.range(date.local(2011, 11, 01), date.local(2012, 00, 15), 2);
  test.equal(days.length, 3);
  test.dateEqual(days[0], date.local(2011, 11, 05));
  test.dateEqual(days[1], date.local(2011, 11, 19));
  test.dateEqual(days[2], date.local(2012, 00, 02));
  test.end();
});

tape("monday.count(start, end) counts Mondays after start (exclusive) and before end (inclusive)", function(test) {
  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  test.equal(time.monday.count(date.local(2014, 00, 01), date.local(2014, 00, 05)), 0);
  test.equal(time.monday.count(date.local(2014, 00, 01), date.local(2014, 00, 06)), 1);
  test.equal(time.monday.count(date.local(2014, 00, 01), date.local(2014, 00, 07)), 1);
  test.equal(time.monday.count(date.local(2014, 00, 01), date.local(2014, 00, 13)), 2);

  //     January 2018
  // Su Mo Tu We Th Fr Sa
  //     1  2  3  4  5  6
  //  7  8  9 10 11 12 13
  // 14 15 16 17 18 19 20
  // 21 22 23 24 25 26 27
  // 28 29 30 31
  test.equal(time.monday.count(date.local(2018, 00, 01), date.local(2018, 00, 07)), 0);
  test.equal(time.monday.count(date.local(2018, 00, 01), date.local(2018, 00, 08)), 1);
  test.equal(time.monday.count(date.local(2018, 00, 01), date.local(2018, 00, 09)), 1);
  test.end();
});

tape("monday.count(start, end) observes Daylight Savings Time", function(test) {
  test.equal(time.monday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 01)), 10);
  test.equal(time.monday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 03)), 10);
  test.equal(time.monday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 04)), 10);
  test.equal(time.monday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 00)), 44);
  test.equal(time.monday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 01)), 44);
  test.equal(time.monday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 02)), 44);
  test.end();
});
