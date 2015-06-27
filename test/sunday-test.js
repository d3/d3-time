var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("sunday.floor(date) returns sundays", function(test) {
  test.dateEqual(time.sunday.floor(date.local(2010, 11, 31, 23, 59, 59)), date.local(2010, 11, 26));
  test.dateEqual(time.sunday.floor(date.local(2011, 00, 01, 00, 00, 00)), date.local(2010, 11, 26));
  test.dateEqual(time.sunday.floor(date.local(2011, 00, 01, 00, 00, 01)), date.local(2010, 11, 26));
  test.dateEqual(time.sunday.floor(date.local(2011, 00, 01, 23, 59, 59)), date.local(2010, 11, 26));
  test.dateEqual(time.sunday.floor(date.local(2011, 00, 02, 00, 00, 00)), date.local(2011, 00, 02));
  test.dateEqual(time.sunday.floor(date.local(2011, 00, 02, 00, 00, 01)), date.local(2011, 00, 02));
  test.end();
});

tape("sunday.floor(date) observes daylight savings time", function(test) {
  test.dateEqual(time.sunday.floor(date.local(2011, 02, 13, 01)), date.local(2011, 02, 13));
  test.dateEqual(time.sunday.floor(date.local(2011, 10, 06, 01)), date.local(2011, 10, 06));
  test.end();
});

tape("sunday.floor(date) correctly handles years in the first century", function(test) {
  test.dateEqual(time.sunday.floor(date.local(0011, 10, 06, 07)), date.local(0011, 10, 01));
  test.end();
});

tape("sunday.ceil(date) returns sundays", function(test) {
  test.dateEqual(time.sunday.ceil(date.local(2010, 11, 31, 23, 59, 59)), date.local(2011, 00, 02));
  test.dateEqual(time.sunday.ceil(date.local(2011, 00, 01, 00, 00, 00)), date.local(2011, 00, 02));
  test.dateEqual(time.sunday.ceil(date.local(2011, 00, 01, 00, 00, 01)), date.local(2011, 00, 02));
  test.dateEqual(time.sunday.ceil(date.local(2011, 00, 01, 23, 59, 59)), date.local(2011, 00, 02));
  test.dateEqual(time.sunday.ceil(date.local(2011, 00, 02, 00, 00, 00)), date.local(2011, 00, 02));
  test.dateEqual(time.sunday.ceil(date.local(2011, 00, 02, 00, 00, 01)), date.local(2011, 00, 09));
  test.end();
});

tape("sunday.ceil(date) observes daylight savings time", function(test) {
  test.dateEqual(time.sunday.ceil(date.local(2011, 02, 13, 01)), date.local(2011, 02, 20));
  test.dateEqual(time.sunday.ceil(date.local(2011, 10, 06, 01)), date.local(2011, 10, 13));
  test.end();
});

tape("sunday.offset(date) is an alias for sunday.offset(date, 1)", function(test) {
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011, 00, 07, 23, 59, 59, 999));
  test.end();
});

tape("sunday.offset(date, count) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.sunday.offset(d, +1);
  test.dateEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("sunday.offset(date, count) does not round the passed-in date", function(test) {
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 00, 07, 23, 59, 59, 999));
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 17, 23, 59, 59, 456));
  test.end();
});

tape("sunday.offset(date, count) allows negative offsets", function(test) {
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 01), -1), date.local(2010, 10, 24));
  test.dateEqual(time.sunday.offset(date.local(2011, 00, 01), -2), date.local(2010, 11, 18));
  test.dateEqual(time.sunday.offset(date.local(2011, 00, 01), -1), date.local(2010, 11, 25));
  test.end();
});

tape("sunday.offset(date, count) allows positive offsets", function(test) {
  test.dateEqual(time.sunday.offset(date.local(2010, 10, 24), +1), date.local(2010, 11, 01));
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 18), +2), date.local(2011, 00, 01));
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 25), +1), date.local(2011, 00, 01));
  test.end();
});

tape("sunday.offset(date, count) allows zero offset", function(test) {
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  test.dateEqual(time.sunday.offset(date.local(2010, 11, 31, 23, 59, 58, 000), 0), date.local(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});
