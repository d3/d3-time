var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcWednesdays in an alias for utcWednesday.range", function(test) {
  test.equal(time.utcWednesdays, time.utcWednesday.range);
  test.end();
});

tape("utcWednesday.floor(date) returns wednesdays", function(test) {
  test.dateEqual(time.utcWednesday.floor(date.utc(2011, 00, 03, 23, 59, 59)), date.utc(2010, 11, 29));
  test.dateEqual(time.utcWednesday.floor(date.utc(2011, 00, 04, 00, 00, 00)), date.utc(2010, 11, 29));
  test.dateEqual(time.utcWednesday.floor(date.utc(2011, 00, 04, 00, 00, 01)), date.utc(2010, 11, 29));
  test.dateEqual(time.utcWednesday.floor(date.utc(2011, 00, 04, 23, 59, 59)), date.utc(2010, 11, 29));
  test.dateEqual(time.utcWednesday.floor(date.utc(2011, 00, 05, 00, 00, 00)), date.utc(2011, 00, 05));
  test.dateEqual(time.utcWednesday.floor(date.utc(2011, 00, 05, 00, 00, 01)), date.utc(2011, 00, 05));
  test.end();
});
