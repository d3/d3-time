var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcDay.floor(date) returns the latest preceding midnight", function(test) {
  test.dateEqual(time.utcDay.floor(date.utc(2010, 11, 31, 23)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 00, 01, 00)), date.utc(2011, 00, 01));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 00, 01, 01)), date.utc(2011, 00, 01));
  test.end();
});

tape("utcDay.floor(date) does not observe the start of daylight savings time", function(test) {
  test.dateEqual(time.utcDay.floor(date.utc(2011, 02, 13, 07)), date.utc(2011, 02, 13));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 02, 13, 08)), date.utc(2011, 02, 13));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 02, 13, 09)), date.utc(2011, 02, 13));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 02, 13, 10)), date.utc(2011, 02, 13));
  test.end();
});

tape("utcDay.floor(date) does not observe the end of daylight savings time", function(test) {
  test.dateEqual(time.utcDay.floor(date.utc(2011, 10, 06, 05)), date.utc(2011, 10, 06));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 10, 06, 06)), date.utc(2011, 10, 06));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 10, 06, 07)), date.utc(2011, 10, 06));
  test.dateEqual(time.utcDay.floor(date.utc(2011, 10, 06, 08)), date.utc(2011, 10, 06));
  test.end();
});

tape("utcDay.round(date) returns the nearest day boundary", function(test) {
  test.dateEqual(time.utcDay.round(date.utc(2010, 11, 30, 13)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcDay.round(date.utc(2010, 11, 30, 11)), date.utc(2010, 11, 30));
  test.end();
});

tape("utcDay.ceil(date) returns the earliest following midnights", function(test) {
  test.dateEqual(time.utcDay.ceil(date.utc(2010, 11, 30, 23)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcDay.ceil(date.utc(2010, 11, 31, 00)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcDay.ceil(date.utc(2010, 11, 31, 01)), date.utc(2011, 00, 01));
  test.end();
});

tape("utcDay.ceil(date) does not observe the start of daylight savings time", function(test) {
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 07)), date.utc(2011, 02, 14));
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 08)), date.utc(2011, 02, 14));
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 09)), date.utc(2011, 02, 14));
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 10)), date.utc(2011, 02, 14));
  test.end();
});

tape("utcDay.ceil(date) does not observe the end of daylight savings time", function(test) {
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 05)), date.utc(2011, 10, 07));
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 06)), date.utc(2011, 10, 07));
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 07)), date.utc(2011, 10, 07));
  test.dateEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 08)), date.utc(2011, 10, 07));
  test.end();
});

tape("utcDay.offset(date) is an alias for utcDay.offset(date, 1)", function(test) {
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011, 00, 01, 23, 59, 59, 999));
  test.end();
});

tape("utcDay.offset(date, count) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcDay.offset(d, +1);
  test.dateEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcDay.offset(date, count) does not round the passed-in-date", function(test) {
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 01, 23, 59, 59, 999));
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 29, 23, 59, 59, 456));
  test.end();
});

tape("utcDay.offset(date, count) allows negative offsets", function(test) {
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 31), -1), date.utc(2010, 11, 30));
  test.dateEqual(time.utcDay.offset(date.utc(2011, 00, 01), -2), date.utc(2010, 11, 30));
  test.dateEqual(time.utcDay.offset(date.utc(2011, 00, 01), -1), date.utc(2010, 11, 31));
  test.end();
});

tape("utcDay.offset(date, count) allows positive offsets", function(test) {
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 31), +1), date.utc(2011, 00, 01));
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 30), +2), date.utc(2011, 00, 01));
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 30), +1), date.utc(2010, 11, 31));
  test.end();
});

tape("utcDay.offset(date, count) allows zero offset", function(test) {
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.dateEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});
