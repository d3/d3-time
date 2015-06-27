var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("mondays in an alias for monday.range", function(test) {
  test.equal(time.mondays, time.monday.range);
  test.end();
});

tape("monday.floor(date) returns mondays", function(test) {
  test.dateEqual(time.monday.floor(date.local(2011, 00, 01, 23, 59, 59)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 00, 00, 00)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 00, 00, 01)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 23, 59, 59)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 03, 00, 00, 00)), date.local(2011, 00, 03));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 03, 00, 00, 01)), date.local(2011, 00, 03));
  test.end();
});

tape("monday.range(start, stop, step) returns every step monday", function(test) {
  var days = time.monday.range(date.local(2011, 11, 01), date.local(2012, 00, 15), 2);
  test.equal(days.length, 3);
  test.dateEqual(days[0], date.local(2011, 11, 05));
  test.dateEqual(days[1], date.local(2011, 11, 19));
  test.dateEqual(days[2], date.local(2012, 00, 02));
  test.end();
});
